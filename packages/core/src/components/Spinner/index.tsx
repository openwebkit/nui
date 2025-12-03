import { type CSSProperties } from "react";
import { Color, Size } from "@/types";
import { cn } from "@/utils";
import { TEXT_COLOR_MAPPING } from "@/constants";

export interface ISpinnerProps {
  size?: Size;
  color?: Color;
  borderWidth?: CSSProperties["width"];
  className?: string;
}

const sizeMap: Record<Size, string> = {
  xs: "10px",
  sm: "12px",
  md: "14px",
  lg: "16px",
  xl: "18px",
};

export const Spinner = ({
  size = "sm",
  color = "primary",
  borderWidth = "2px",
  className,
}: ISpinnerProps) => {
  return (
    <div
      className={cn(
        "circular-loader animate-spin rounded-full",
        TEXT_COLOR_MAPPING[color],
        className,
      )}
      style={{
        border: `${borderWidth} solid`,
        borderTopColor: "transparent",
        height: sizeMap[size],
        width: sizeMap[size],
      }}
    />
  );
};
