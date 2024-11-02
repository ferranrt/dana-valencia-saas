import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
interface StateComparator<T> {
  (a: T | undefined, b: T | undefined): boolean;
}

export function useUpdatableState<T>(
  value: T,
  predicate: StateComparator<T> = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
  }
): UpdatableResult<T> {
  const [stateValue, stateUpdater] = useState(value);
  const previousValueRef = useRef(value);
  const [isChanged, setChanged] = useState(true);

  useEffect(() => {
    previousValueRef.current = value;
  });

  if (
    !predicate(value, previousValueRef.current) &&
    !predicate(value, stateValue)
  ) {
    setChanged(true);
    stateUpdater(value);
  } else {
    if (isChanged) {
      setChanged(false);
    }
  }

  return [stateValue, stateUpdater, isChanged];
}

export type UpdatableResult<T> = [T, Dispatch<SetStateAction<T>>, boolean];
