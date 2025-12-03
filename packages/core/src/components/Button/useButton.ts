"use client";
import { type VariantProps, cva } from "class-variance-authority";
import type React from "react";
import { type CSSProperties } from "react";
import { MainColor, Size } from "@/types";
import { cn } from "@/utils";

export type ButtonVariant = "solid" | "outline" | "text";
export type ButtonBorderType = "circle" | "rounded" | "square";

const buttonVariants = cva(
  "nui-button inline-flex items-center cursor-pointer justify-center no-underline relative transition-colors focus-visible:outline-none",
  {
    variants: {
      variant: {
        solid: "border",
        outline: "border border-current",
        text: "",
      } satisfies Record<ButtonVariant, string>,
      size: {
        xs: "text-[10px] h-[30px] px-1 font-medium",
        sm: "text-xs h-[36px] px-2 font-medium",
        md: "text-sm h-[40px] px-3 font-medium",
        lg: "text-base h-[48px] px-4 font-medium",
        xl: "text-md h-[56px] px-5 font-medium",
      } satisfies Record<Size, string>,
      borderType: {
        circle: "rounded-full",
        rounded: "", // should depend on size
        square: "rounded-none",
      } satisfies Record<ButtonBorderType, string>,
      color: {
        primary: "",
        secondary: "",
        danger: "",
        gray: "",
        black: "",
        white: "",
        success: "",
        info: "",
        warning: "",
      } satisfies Record<MainColor, string>,
      disabled: {
        true: "cursor-not-allowed opacity-50 pointer-events-none",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
      borderType: "rounded",
      color: "primary",
      fullWidth: false,
    },
    compoundVariants: [
      {
        variant: "solid",
        color: "primary",
        className:
          "bg-primary border-primary text-primary-foreground hover:bg-primary-hover hover:border-primary-hover",
      },
      {
        variant: "solid",
        color: "secondary",
        className:
          "bg-secondary border-secondary text-secondary-foreground hover:bg-secondary-hover hover:border-secondary-hover",
      },
      {
        variant: "solid",
        color: "danger",
        className:
          "bg-danger border-danger text-danger-foreground hover:bg-danger-hover hover:border-danger-hover",
      },
      {
        variant: "solid",
        color: "gray",
        className:
          "bg-gray border-gray text-gray-foreground hover:bg-gray-hover hover:border-gray-hover",
      },
      {
        variant: "solid",
        color: "black",
        className:
          "bg-black border-black text-white hover:bg-gray-900 hover:border-gray-900 ",
      },
      {
        variant: "solid",
        color: "success",
        className:
          "bg-success border-success text-success-foreground hover:bg-success-hover hover:border-success-hover",
      },
      {
        variant: "solid",
        color: "white",
        className:
          "bg-white border-white text-black hover:bg-gray-100 hover:border-gray-100",
      },
      {
        variant: "solid",
        color: "info",
        className:
          "bg-info border-info text-info-foreground hover:bg-info-hover hover:border-info-hover",
      },
      {
        variant: "solid",
        color: "warning",
        className:
          "bg-warning border-warning text-warning-foreground hover:bg-warning-hover",
      },
      {
        variant: "outline",
        color: "primary",
        className: "text-primary border hover:bg-primary-background",
      },
      {
        variant: "outline",
        color: "secondary",
        className: "text-secondary border hover:bg-secondary-background",
      },
      {
        variant: "outline",
        color: "danger",
        className: "text-danger border-danger hover:bg-danger-background",
      },
      {
        variant: "outline",
        color: "gray",
        className: "text-gray border-gray hover:bg-gray-background",
      },
      {
        variant: "outline",
        color: "black",
        className: "text-black border-black hover:bg-gray-background",
      },
      {
        variant: "outline",
        color: "white",
        className: "text-white border-white hover:bg-white/10",
      },
      {
        variant: "outline",
        color: "success",
        className: "text-success border-success hover:bg-success-background",
      },
      {
        variant: "outline",
        color: "info",
        className: "text-info border-info hover:bg-info-background",
      },
      {
        variant: "outline",
        color: "warning",
        className: "text-warning border-warning hover:bg-warning-background",
      },
      {
        variant: "text",
        color: "primary",
        className: "text-primary hover:bg-primary-background",
      },
      {
        variant: "text",
        color: "secondary",
        className: "text-secondary hover:bg-secondary-background",
      },
      {
        variant: "text",
        color: "danger",
        className: "text-danger hover:bg-danger-background",
      },
      {
        variant: "text",
        color: "gray",
        className: "text-gray hover:bg-gray-background",
      },
      {
        variant: "text",
        color: "black",
        className: "text-black hover:bg-gray-background",
      },
      {
        variant: "text",
        color: "white",
        className: "text-white hover:bg-white/10",
      },
      {
        variant: "text",
        color: "success",
        className: "text-success hover:bg-success-background",
      },
      {
        variant: "text",
        color: "info",
        className: "text-info hover:bg-info-background",
      },
      {
        variant: "text",
        color: "warning",
        className: "text-warning hover:bg-warning-background",
      },
      // Size-based border radius for rounded borderType
      {
        borderType: "rounded",
        size: "xs",
        className: "rounded-md",
      },
      {
        borderType: "rounded",
        size: "sm",
        className: "rounded-md",
      },
      {
        borderType: "rounded",
        size: "md",
        className: "rounded-lg",
      },
      {
        borderType: "rounded",
        size: "lg",
        className: "rounded-lg",
      },
      {
        borderType: "rounded",
        size: "xl",
        className: "rounded-xl",
      },
    ],
  },
);

type HTMLButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "size" | "color" | "disabled" | "onClick"
>;

export interface IButtonProps
  extends VariantProps<typeof buttonVariants>,
    HTMLButtonProps {
  loading?: boolean;
  leadingComp?: React.ReactNode;
  trailingComp?: React.ReactNode;
  loadingText?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  minWidth?: CSSProperties["minWidth"];
  tooltip?: string;
}

export const useButtonProps = ({
  variant,
  color,
  size,
  borderType,
  fullWidth,
  disabled,
  className,
  minWidth,
  loading,
  ...props
}: IButtonProps) => {
  const onClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    if (loading || disabled) return;
    props.onClick?.();
  };

  const htmlButtonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
    onClick: onClick,
    className: cn(
      buttonVariants({
        variant: variant,
        color: color,
        size: size,
        borderType: borderType,
        fullWidth: fullWidth,
        disabled: disabled ? true : false,
      }),
      className,
    ),
    style: {
      minWidth: minWidth,
    },
    ...props,
  };

  return {
    htmlButtonProps,
  };
};
