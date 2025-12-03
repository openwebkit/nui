import type { ChangeEvent } from "react";
import { IBaseTextInputProps } from "./interface";

const useInput = ({
  validateFn,
  validateRegex,
  setValue,
  readOnly,
  name,
  ...props
}: IBaseTextInputProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const currentValue = e.currentTarget.value;
    if ((validateFn && !validateFn(currentValue)) || readOnly) return;
    if (validateRegex && !validateRegex.test(currentValue)) return;
    setValue?.(name, currentValue);
  };

  const htmlInputProps = {
    name,
    onChange,
    ...props,
  };

  return {
    htmlInputProps,
    readOnly,
  };
};

export default useInput;
