import { Size } from "@/types";
import { cn } from "@/utils";
import type React from "react";

interface InputLabelProps
  extends Omit<React.HTMLProps<HTMLLabelElement>, "size"> {
  required?: boolean;
  size: Size;
}

const sizeClasses: Record<Size, string> = {
  xs: "text-[10px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-md",
  xl: "text-lg",
};

const InputLabel = ({
  required,
  children,
  disabled,
  ...props
}: InputLabelProps) => {
  return (
    <label
      className={cn(
        "flex font-medium text-input-label",
        {
          "text-input-label-disabled": disabled,
        },
        sizeClasses[props.size],
      )}
      {...props}
    >
      {children}
      {required && (
        <span
          className={cn("text-danger", {
            "opacity-50": disabled,
          })}
        >
          *
        </span>
      )}
    </label>
  );
};

export default InputLabel;
