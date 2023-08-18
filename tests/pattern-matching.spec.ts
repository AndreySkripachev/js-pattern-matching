import { Type, FunctionWithPatternMatching } from '../lib';

describe('Function with pattern matching', () => {
  let fn: FunctionWithPatternMatching;

  beforeEach(() => {
    fn = new FunctionWithPatternMatching();
  });

  it('should perform different functions for different patterns', () => {
    fn.add([Type.Number], a => a + 1);
    fn.add([Type.Number, Type.Number], (a, b) => a + b);
    fn.add([Type.String], str => str.toUpperCase());

    expect(fn(6)).toEqual(7);
    expect(fn(5, 7)).toEqual(12);
    expect(fn('qwerty')).toEqual('qwerty'.toUpperCase());
    expect(() => fn(5, 6, 7)).toThrow();
  });

  it('should check the possibility of using the pattern using the guards', () => {
    let guardCalls = 0;
    const isPositive = (a: number): boolean => {
      guardCalls++;
      return a > 0;
    }

    fn.add([Type.Number], a => a + 1, isPositive);
    fn.add([Type.Number], a => a - 1);

    expect(fn(5)).toEqual(6);
    expect(fn(-5)).toEqual(-6);
    expect(guardCalls).toEqual(2);
  });

})
