"use client";
import { cn } from "@/utils";
// import Spinner from "../spinner";
import { ButtonVariant, type IButtonProps, useButtonProps } from "./useButton";
import { ISpinnerProps, Spinner } from "../Spinner";
import { MainColor } from "@/types";
import { forwardRef } from "react";

const spinnerColorMap: Record<
  ButtonVariant,
  Record<MainColor, ISpinnerProps["color"]>
> = {
  solid: {
    primary: "primary-foreground",
    secondary: "secondary-foreground",
    danger: "danger-foreground",
    gray: "gray-foreground",
    black: "white",
    white: "black",
    success: "success-foreground",
    info: "info-foreground",
    warning: "warning-foreground",
  },
  outline: {
    primary: "primary",
    secondary: "secondary",
    danger: "danger",
    gray: "gray",
    black: "white",
    white: "black",
    success: "success",
    info: "info",
    warning: "warning",
  },
  text: {
    primary: "primary",
    secondary: "secondary",
    danger: "danger",
    gray: "gray",
    black: "black",
    white: "white",
    success: "success",
    info: "info",
    warning: "warning",
  },
};

const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { htmlButtonProps } = useButtonProps(props);

  return (
    <button {...htmlButtonProps} ref={ref}>
      <div
        className={cn("h-full flex items-center gap-2", {
          "opacity-0": props.loading,
        })}
      >
        {props.leadingComp}
        {props.children}
        {props.trailingComp}
      </div>
      <div
        className={cn(
          "absolute h-full w-full flex items-center gap-2 justify-center left-0 top-0",
          {
            hidden: !props.loading,
          },
        )}
      >
        <Spinner
          size={props.size || "md"}
          color={
            spinnerColorMap[props.variant || "solid"][props.color || "primary"]
          }
        />
        <span>{props.loadingText}</span>
      </div>
    </button>
  );
});

export default Button;
