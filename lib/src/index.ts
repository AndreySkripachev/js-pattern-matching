import { defineType } from '../utils/define-types';
import { isArraysEqual } from '../utils/is-arrays-equal';
import { MapTypes, Type } from '../utils/types/type';

type Pattern = [
  args: readonly Type[],
  func: (...args: any) => any,
  guard: (...args: any) => boolean
];

export class FunctionWithPatternMatching extends Function {

  private readonly patterns: Pattern[] = [];

  public constructor() {
    super('...args', 'return this._call(...args)');

    const bound = this.bind(this);
    Object.defineProperty(bound, 'patterns', { value: this.patterns });
    this._call = this._call.bind(bound);

    return bound;
  }

  private _call(...parameters: any[]) {
    const args = parameters.map(defineType);

    for (const [pattern, func, guard] of this.patterns) {
      if (isArraysEqual(pattern, args)) {

        if (guard(...parameters)) {
          return func(...parameters);
        }
      }
    }

    throw new Error('No found pattern for this call');
  }

  public add<const T extends readonly Type[]>(
    pattern: T,
    fn: (...args: MapTypes<T>) => any,
    guard: (...args: MapTypes<T>) => boolean = () => true,
  ): void {
    this.patterns.push([pattern, fn, guard]);
  }
}
