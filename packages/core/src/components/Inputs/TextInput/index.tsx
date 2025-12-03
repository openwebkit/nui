import { ChangeEvent, forwardRef, useRef } from "react";
import { IInputWrapperProps, InputWrapper } from "../base";
import { cn } from "@/utils";
import { IBaseTextInputProps } from "../base/interface";

export type ITextInputProps = Omit<
  IInputWrapperProps,
  "inputElementRef" | "children"
> &
  IBaseTextInputProps & {
    className?: string;
  } & Omit<React.HTMLProps<HTMLInputElement>, "size">;

const TextInput = forwardRef<HTMLInputElement, ITextInputProps>(
  (
    {
      error,
      leadingVisual,
      trailingVisual,
      label,
      readOnly,
      size,
      helpText,
      cursorPointer,
      disabled,
      required,
      tabIndex,
      validateFn,
      validateRegex,
      setValue,
      name,
      className,
      containerClassName,
      marginWidth,
      ...props
    }: ITextInputProps,
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(
      ref ? (ref as any).current : null
    );
    const onChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const currentValue = e.currentTarget.value;
      if ((validateFn && !validateFn(currentValue)) || readOnly) return;
      if (validateRegex && !validateRegex.test(currentValue)) return;
      setValue?.(name, currentValue);
    };

    return (
      <InputWrapper
        error={error}
        leadingVisual={leadingVisual}
        trailingVisual={trailingVisual}
        label={label}
        readOnly={readOnly}
        size={size}
        helpText={helpText}
        cursorPointer={cursorPointer}
        disabled={disabled}
        required={required}
        tabIndex={tabIndex}
        containerClassName={containerClassName}
        inputElementRef={inputRef}
        maxWidth={marginWidth}
      >
        <input
          ref={inputRef}
          name={name}
          className={cn("outline-none w-full bg-transparent", className)}
          onChange={onChange}
          disabled={disabled}
          readOnly={readOnly}
          {...props}
        />
      </InputWrapper>
    );
  }
);

export default TextInput;
