import { CSSProperties, forwardRef } from "react";
import Button from "../Button/Button";
import { IButtonProps } from "../Button/useButton";
import { Size } from "@/types";
import { cn } from "@/utils";

interface IconButtonProps extends Omit<IButtonProps, "size"> {
  size?: Size | CSSProperties["width"];
}

// Size map to ensure icon buttons are square with proper dimensions
const iconButtonSizeMap: Record<Size, { width: string; height: string }> = {
  xs: { width: "24px", height: "24px" },
  sm: { width: "24px", height: "24px" },
  md: { width: "32px", height: "32px" },
  lg: { width: "40px", height: "40px" },
  xl: { width: "48px", height: "48px" },
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const { size = "md", className, style, ...rest } = props;

    const sizeStyle =
      size in iconButtonSizeMap
        ? iconButtonSizeMap[size as Size]
        : {
            width: size,
            height: size,
          };

    return (
      <Button
        ref={ref}
        className={cn("nui-icon-button", className)}
        {...rest}
        style={{
          ...style,
          maxWidth: sizeStyle.width,
          maxHeight: sizeStyle.height,
          minHeight: sizeStyle.height,
          minWidth: sizeStyle.width,
        }}
      />
    );
  },
);
