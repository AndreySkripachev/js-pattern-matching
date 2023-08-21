# Simple recursion

## Factorial

```typescript
const factorial = new FunctionWithPatternMatching();

// Factorial(0) is 1.
factorial.add([Type.Number], () => 1, n => n === 0)

// Recursively returns the factorial of a number n if it is greater than one.
factorial.add([Type.Number], n => n * factorial(n-1), n => n > 0);

// Returns the result in the any other case.
factorial.add([Type.Number], n => n);
```

## Fibbonacci sequence

```typescript
const fibbonacci = new FunctionWithPatternMatching();

// Returns 0 if argument is 0.
fibbonacci.add([Type.Number], () => 0, a => a === 0);

// Returns 1 if argument is 1 or 2.
fibbonacci.add([Type.Number], () => 1, a => a === 1 || a === 2);

// Returns result of fibbonacci sequence else.
fibbonacci.add([Type.Number], a => fibbonacci(a - 1) + fibbonacci(a - 2));
```
