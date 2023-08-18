import { factorial } from "../factorial";

describe('factorial(x)', () => {
  it('must return the factorial of the number', () => {
    expect(factorial(5)).toEqual(120);
  });

  it('must return 1 if n=0', () => {
    expect(factorial(0)).toEqual(1);
  });

  it('should throw an error if a negative number is passed in', () => {
    expect(() => factorial(-1)).toThrowError();
  });
});
