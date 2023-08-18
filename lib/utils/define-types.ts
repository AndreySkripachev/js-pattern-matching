import { Type } from './types/type';

/**
 * Converts a data type to a Type enum value.
 * @param value Value.
 *
 * @example
 * defineType(123); // Type.Number
 *
 * defineType('qwe'); // Type.String
 *
 * defineType(undefined); // Type.Undefined
 *
 * defineType(() => {}); // Type.Function
 *
 * defineType(null); // Type.Null
 *
 * defineType({}); // Type.Object
 *
 * defineType([]); // Type.Array
 *
 * defineType(true); // Type.Boolean
 *
 * // In any other case it returns `Type.Unknown`
 */
export function defineType(value: any): Type {
  switch (typeof value) {
    case 'bigint':
    case 'number':
      return Type.Number;
    case 'string':
      return Type.String;
    case 'undefined':
      return Type.Undefined;
    case 'function':
      return Type.Function;
    case 'object':
      return value === null ?
        Type.Null :
        Array.isArray(value) ? Type.Array : Type.Object;
    case 'boolean':
      return Type.Boolean;
    default:
      return Type.Unknown;
  }
}