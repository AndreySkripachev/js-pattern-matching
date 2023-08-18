import { Primitive } from './types/primitive';

/**
 * Checks arrays for equality.
 * @param a1 Array.
 * @param a2 Array.
 */
export function isArraysEqual<T extends Primitive>(a1: readonly T[], a2: readonly T[]): boolean {
  return a1.length === a2.length && a1.every((item, index) => item === a2[index]);
}