export interface CounterState {
  count: number;
}

export interface CounterMethods {
  increment(): void;
  decrement(): void;
  reset(): void;
}
