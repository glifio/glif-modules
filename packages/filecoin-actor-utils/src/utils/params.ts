import cloneDeep from 'lodash.clonedeep'
import { Interface } from 'ethers'
import { actorDescriptorMap } from '../data'
import { ActorName, DataType, MethodNum } from '../types'
import { ABI, cborToHex, abiParamsToDataType } from './abi'
import { describeDataType } from './generic'

/**
 * Returns a descriptor without values for the provided actor name and method number
 * @param actorName the name of the actor on which to call the method
 * @param methodNum the number of the method to call on the actor
 * @returns the descriptor for the actor's method
 */
export const getMessageParamsDescriptor = (
  actorName: ActorName,
  methodNum: MethodNum
): DataType => {
  const descriptor = actorDescriptorMap[actorName]?.Methods[methodNum]?.Param
  if (descriptor) return descriptor
  throw new Error(
    `Missing message params descriptor for: ${actorName}, method: ${methodNum}`
  )
}

/**
 * Returns a descriptor with values based on the provided actor name, method number and params
 * @param actorName the name of the actor on which the method was called
 * @param methodNum the number of the method that was called on the actor
 * @param msgParams the parameters that were passed to the method
 * @returns the described message params
 */
export const describeMessageParams = (
  actorName: ActorName,
  methodNum: MethodNum,
  msgParams: any
): DataType | null => {
  // Return null for falsy message params
  if (!msgParams) return null

  // Retrieve the message params descriptor
  const descriptor = getMessageParamsDescriptor(actorName, methodNum)

  // Supplement the descriptor with parameter values
  const dataType = cloneDeep<DataType>(descriptor)
  describeDataType(dataType, msgParams)

  // Return the described params
  return dataType
}

/**
 * Returns a descriptor with values based on the provided FEVM params and ABI
 * @param params the FEVM params as a base64 encoded CBOR string
 * @param abi the ABI of the contract that performed this transaction
 * @returns the described message params
 */
export const describeFEVMTxParams = (
  params: string,
  abi: ABI
): DataType | null => {
  // Throw error for missing ABI
  if (!abi) throw new Error('Missing ABI')

  // Return null for falsy tx params
  if (!params) return null

  // Parse transaction from params
  const iface = new Interface(abi)
  const data = cborToHex(params)
  const tx = iface.parseTransaction({ data })
  if (!tx) throw new Error('Failed to parse transaction')

  // Return null for empty ABI inputs
  const { inputs } = tx.fragment
  if (!inputs.length) return null

  // Convert ABI inputs to descriptor
  const dataType = abiParamsToDataType('Inputs', inputs)

  // Supplement the descriptor with parameter values
  describeDataType(dataType, tx.args)

  // Return the described params
  return dataType
}
