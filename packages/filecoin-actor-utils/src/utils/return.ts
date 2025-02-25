import { Interface } from 'ethers'
import cloneDeep from 'lodash.clonedeep'
import { actorDescriptorMap, emptyValue } from '../data'
import { ActorName, DataType, MethodNum } from '../types'
import { ABI, cborToHex, abiParamsToDataType, abiParamToDataType } from './abi'
import { describeDataType } from './generic'

/**
 * Returns a descriptor without values for the provided actor name and method number
 * @param actorName the name of the actor on which to call the method
 * @param methodNum the number of the method to call on the actor
 * @returns the descriptor for the actor's method
 */
export const getMessageReturnDescriptor = (
  actorName: ActorName,
  methodNum: MethodNum
): DataType => {
  const descriptor = actorDescriptorMap[actorName]?.Methods[methodNum]?.Return
  if (descriptor) return descriptor
  throw new Error(
    `Missing message return descriptor for: ${actorName}, method: ${methodNum}`
  )
}

/**
 * Returns a descriptor with values based on the provided actor name, method number and return value
 * @param actorName the name of the actor on which the method was called
 * @param methodNum the number of the method that was called on the actor
 * @param msgReturn the value that was returned from the method
 * @returns the described message return value
 */
export const describeMessageReturn = (
  actorName: ActorName,
  methodNum: MethodNum,
  msgReturn: any
): DataType => {
  // Retrieve the message return descriptor
  const descriptor = getMessageReturnDescriptor(actorName, methodNum)

  // Supplement the descriptor with return values
  const dataType = cloneDeep<DataType>(descriptor)
  describeDataType(dataType, msgReturn)

  // Return the described return value
  return dataType
}

/**
 * Returns a descriptor with values based on the provided FEVM params, return value and ABI
 * @param params the FEVM params as a base64 encoded CBOR string
 * @param returnVal the FEVM return value as a base64 encoded CBOR string
 * @param abi the ABI of the contract that performed this transaction
 * @returns the described message return value
 */
export const describeFEVMTxReturn = (
  params: string,
  returnVal: string,
  abi: ABI
): DataType => {
  // Throw error for missing ABI
  if (!abi) throw new Error('Missing ABI')

  // Parse transaction from params
  const iface = new Interface(abi)
  const data = cborToHex(params)
  const tx = iface.parseTransaction({ data })
  if (!tx) throw new Error('Failed to parse transaction')

  // Return empty object if no output
  const { outputs } = tx.fragment
  if (!outputs?.length) return emptyValue

  // Decode return value
  const returnHex = cborToHex(returnVal)
  const result = iface.decodeFunctionResult(tx.fragment, returnHex)

  // Convert ABI outputs to descriptor
  const dataType =
    outputs.length === 1
      ? abiParamToDataType(outputs[0])
      : abiParamsToDataType('Outputs', outputs)

  // Supplement the descriptor with return values
  describeDataType(dataType, outputs.length === 1 ? result[0] : result)

  // Return the described return value
  return dataType
}
