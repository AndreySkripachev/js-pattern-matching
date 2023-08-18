import { fibbonacci } from '../fibbonacci'

describe('fibbonacci(x)', () => {
  it('should return fibbonacci value', () => {
    expect(fibbonacci(8)).toEqual(21);
  });

  it('should return 1 if 1 or 2 passed in and 0 if 0 passed in', () => {
    expect(fibbonacci(1)).toEqual(1);
    expect(fibbonacci(2)).toEqual(1);
    expect(fibbonacci(0)).toEqual(0);
  });

  it('should throw an error if a negative number is passed in', () => {
    expect(() => fibbonacci(-1)).toThrowError();
  })
})
