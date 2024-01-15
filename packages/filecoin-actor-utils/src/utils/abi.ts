import { Fragment, JsonFragment, ParamType } from 'ethers'
import { fromString, toString } from 'uint8arrays'
import { decode } from '@ipld/dag-cbor'
import { DataType, Type } from '../types'

export type ABI = string | ReadonlyArray<Fragment | JsonFragment | string>

/**
 * Returns a hex representation of a base64 encoded cbor string
 * @param base64 the base64 encoded cbor string to convert to hex
 * @returns the hex representation of the base64 encoded cbor string
 */
export const cborToHex = (base64: string): string => {
  const data = fromString(base64, 'base64')
  const decoded = decode<Uint8Array>(data)
  return `0x${toString(decoded, 'hex')}`
}

/**
 * Converts a ParamType array to an Object DataType with the params as its Children
 * @param name the name to assign to the Object DataType
 * @param params the ABI function fragment's inputs or outputs
 * @returns the Object DataType with the params as its Children
 */
export const abiParamsToDataType = (
  name: string,
  params: ReadonlyArray<ParamType>
): DataType => ({
  Type: Type.Object,
  Name: name,
  Children: Object.fromEntries(
    params.map(param => [param.name, abiParamToDataType(param)])
  )
})

/**
 * Converts a ParamType to a DataType
 * @param param the ParamType to convert to a DataType
 * @returns the DataType created from the ParamType
 */
export const abiParamToDataType = (param: ParamType): DataType => {
  switch (param.baseType) {
    case 'array':
      if (!param.arrayChildren)
        throw new Error('ParamType array is missing arrayChildren')
      return {
        Type: Type.Array,
        Name: param.type,
        Contains: abiParamToDataType(param.arrayChildren)
      }
    case 'tuple':
      if (!param.components)
        throw new Error('ParamType tuple is missing components')
      return {
        Type: Type.Object,
        Name: param.type,
        Children: Object.fromEntries(
          param.components.map(comp => [comp.name, abiParamToDataType(comp)])
        )
      }
    default:
      return {
        Type: getTypeFromAbiType(param.baseType),
        Name: param.type
      }
  }
}

const abiIntRegex = /^u?int\d{0,3}$/
const abiFixedRegex = /^u?fixed(\d{1,3}x\d{1,2})?$/
const abiBytesRegex = /^bytes\d{0,2}$/

/**
 * Converts an ABI type string to a DataType Type
 * @param type the ABI type to convert to a DataType Type
 * @returns the DataType Type created from the ABI type
 */
const getTypeFromAbiType = (type: string): Type => {
  if (abiIntRegex.test(type)) return Type.Number
  if (abiFixedRegex.test(type)) return Type.Number
  if (abiBytesRegex.test(type)) return Type.String
  switch (type) {
    case 'bool':
      return Type.Bool
    case 'bytes':
      return Type.Bytes
    case 'string':
      return Type.String
    case 'address':
      return Type.String
    case 'function':
      return Type.String
    default:
      throw new Error(`Unhandled ABI type: ${type}`)
  }
}
