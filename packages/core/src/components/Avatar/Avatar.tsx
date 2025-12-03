import { Size } from "@/types";
import { cn } from "@/utils";
import { Avatar as MuiAvatar } from "@mui/material";
import React, { CSSProperties } from "react";

interface IGenericAvatarProps {
  image?: string;
  size?: Size | CSSProperties["width"];
  label?: string;
  isLoading?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const avatarSizeClassMap: Record<
  Size,
  {
    style: CSSProperties;
    className: string;
  }
> = {
  xs: {
    style: { width: "22px", height: "22px" },
    className: "!text-xs",
  },
  sm: {
    style: { width: "30px", height: "30px" },
    className: "!text-sm",
  },
  md: {
    style: { width: "40px", height: "40px" },
    className: "!text-sm",
  },
  lg: {
    style: { width: "70px", height: "70px" },
    className: "!text-base",
  },
  xl: {
    style: { width: "100px", height: "100px" },
    className: "text-xl ",
  },
};

const Avatar = ({ size = "md", label, ...props }: IGenericAvatarProps) => {
  const char = label?.[0]?.toLocaleLowerCase() || "a";

  const useTailwindSize = size in avatarSizeClassMap;

  return (
    <MuiAvatar
      src={props.image}
      onClick={props.onClick}
      className={cn(
        "bg-avatar",
        useTailwindSize && avatarSizeClassMap[size as Size].className,
        useTailwindSize && "inline-flex rounded-full relative",
        props.isLoading && "bg-slate-200 animate-pulse",
        props.onClick && "cursor-pointer",
      )}
      style={
        useTailwindSize
          ? avatarSizeClassMap[size as Size].style
          : {
              width: size,
              height: size,
            }
      }
    >
      {char.toUpperCase()}
    </MuiAvatar>
  );
};

export default Avatar;
