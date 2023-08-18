import { FunctionWithPatternMatching, Type } from '../../lib';

export const factorial = new FunctionWithPatternMatching();

// Factorial(0) is 1.
factorial.add([Type.Number], () => 1, n => n === 0)

// Recursively returns the factorial of a number n if it is greater than one.
factorial.add([Type.Number], n => n * factorial(n-1), n => n > 0);

// Throws an error if negative number passed in.
factorial.add([Type.Number], () => { throw new Error('Cannot find the factorial of a negative number') }, n => n < 0);

// Returns the result in the any other case.
factorial.add([Type.Number], n => n);
