
/** Data types that can be used. */
export enum Type {
  Number = 'number',
  String = 'string',
  Object = 'object',
  Array = 'array',
  Boolean = 'boolean',
  Undefined = 'undefined',
  Null = 'null',
  Function = 'function',
  Unknown = 'unknown',
}

type __TypeToTSType<T extends Type> =
  T extends Type.Number
  ? number
  : T extends Type.String
    ? string
    : T extends Type.Array
      ? any[]
      : T extends Type.Object
        ? Record<any, any>
        : T extends Type.Boolean
          ? boolean
          : T extends Type.Function
            ? (...args: any[]) => any
            : T extends Type.Null
              ? null
              : T extends Type.Undefined
                ? undefined
                : unknown;

/** Converts Type enum values to a regular type. */
export type MapTypes<T extends readonly Type[]> = {
  [K in keyof T]: __TypeToTSType<T[K]>;
}