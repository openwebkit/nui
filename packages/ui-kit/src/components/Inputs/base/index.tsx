import { cn } from "@/utils";
import type { CSSProperties, ReactNode } from "react";
import { cva } from "class-variance-authority";
import { Size } from "@/types";
import InputLabel from "../../InputLabel";

const errorSizeClasses = {
  xs: "text-[8px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-md",
  xl: "text-lg",
};

const className =
  "nui-input border border-input-border flex items-center rounded-md transition-all duration-200 focus-within:border-input-border-focused";

const inputVariants = cva(className, {
  variants: {
    size: {
      xs: "text-xs h-[30px] px-2 gap-[3px]",
      sm: "text-sm h-[36px] px-2 gap-1",
      md: "text-md h-[40px] px-3 gap-2",
      lg: "text-lg h-[48px] px-4 gap-2",
      xl: "text-xl h-[56px] px-5 gap-2",
    } as Record<Size, string>,
    error: {
      true: "border-danger",
    },
    disabled: {
      true: "bg-gray-100 cursor-not-allowed focus-within:border-input-border",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface IInputWrapperProps {
  children: ReactNode;
  error?: string;
  leadingVisual?: ReactNode;
  trailingVisual?: ReactNode;
  readOnly?: boolean;
  label?: string;
  disabled?: boolean;
  size?: Size;
  helpText?: string;
  required?: boolean;
  cursorPointer?: boolean;
  tabIndex?: number;
  inputElementRef: React.RefObject<HTMLInputElement>;
  containerClassName?: string;
  maxWidth?: CSSProperties["maxWidth"];
}

export interface IInputErrorTextProps {
  size?: Size;
  children: ReactNode;
}

export const InputErrorText = ({
  size = "md",
  children,
}: IInputErrorTextProps) => {
  return (
    <div className={cn("text-danger", errorSizeClasses[size])}>{children}</div>
  );
};

export interface IInputHelpTextProps {
  size?: Size;
  children: ReactNode;
}

export const InputHelpText = ({
  size = "md",
  children,
}: IInputHelpTextProps) => {
  return (
    <div className={cn("text-input-help-text", errorSizeClasses[size])}>
      {children}
    </div>
  );
};

export const InputWrapper = ({
  size = "md",
  tabIndex = 0,
  maxWidth,
  disabled,
  ...props
}: IInputWrapperProps) => {
  return (
    <div
      style={{
        maxWidth: maxWidth,
      }}
      className="flex flex-col gap-1"
    >
      {!!props.label && (
        <InputLabel size={size} required={props.required}>
          {props.label}
        </InputLabel>
      )}
      <div>
        {!!props.helpText && (
          <InputHelpText size={size}>{props.helpText}</InputHelpText>
        )}
        <div
          className={cn(
            inputVariants({
              error: !!props.error,
              size: size,
              disabled: disabled ? true : false,
              className: props.containerClassName,
            }),
          )}
          tabIndex={tabIndex}
          onClick={() => props.inputElementRef.current.focus()}
        >
          {props.leadingVisual}
          {props.children}
          {props.trailingVisual}
        </div>
        {!!props.error && (
          <InputErrorText size={size}>{props.error}</InputErrorText>
        )}
      </div>
    </div>
  );
};
