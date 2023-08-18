import { FunctionWithPatternMatching, Type } from '../../lib';

export const fibbonacci = new FunctionWithPatternMatching();

// Returns 0 if argument is 0.
fibbonacci.add([Type.Number], () => 0, a => a === 0);

// Returns 1 is argument is 1 or 2.
fibbonacci.add([Type.Number], () => 1, a => a === 1 || a === 2);

// Throws an error if negative number passed in.
fibbonacci.add([Type.Number], () => { throw new Error('Cannot find fibbonacci of a negative number') }, a => a < 0);

// Returns result of fibbonacci sequence else.
fibbonacci.add([Type.Number], a => fibbonacci(a - 1) + fibbonacci(a - 2));



