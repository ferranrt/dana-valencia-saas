import { useEffect } from "react";
import { useUpdatableState } from "./use-updatable-state";

type Args = {
  initialValue?: string;
  delay?: number;
  callback?: (_text: string) => void;
};

type ReturnArgs = {
  value: string;
  debouncedValue: string;
  setValue: (_value: string) => void;
};
function valueEquality<T>(left: T, right: T): boolean {
  return left === right;
}

export function useDebouncedText(args?: Args): ReturnArgs {
  const [value, setValue] = useUpdatableState<string>(args?.initialValue || "");
  const [debouncedValue, setDebouncedValue] = useUpdatableState<string>(
    args?.initialValue || ""
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!valueEquality(value, debouncedValue)) {
        setDebouncedValue(value);
        args?.callback?.(value);
      }
    }, args?.delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [args, debouncedValue, setDebouncedValue, value]);

  return {
    value,
    debouncedValue,
    setValue,
  };
}
