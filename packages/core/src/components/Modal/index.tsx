import { cn } from "@/utils";
import { Dialog, type DialogProps } from "@mui/material";
import { X } from "lucide-react";
import type { CSSProperties, HTMLAttributes } from "react";
import * as React from "react";

interface IModalProps extends Omit<DialogProps, "maxWidth" | "ref"> {
  width?: CSSProperties["width"];
  maxWidth?: CSSProperties["maxWidth"];
  borderRadius?: CSSProperties["borderRadius"];
  ref?: React.Ref<HTMLDivElement>;
}

interface ModalComponent
  extends React.ForwardRefExoticComponent<
    IModalProps & React.RefAttributes<HTMLDivElement>
  > {
  Header: typeof Header;
  HeaderTitle: typeof HeaderTitle;
  HeaderCloseButton: typeof HeaderCloseButton;
  Body: typeof ModalBody;
}

const Modal = React.forwardRef<HTMLDivElement, IModalProps>(
  (
    { width = "90%", maxWidth = "600px", borderRadius = "8px", ...props },
    ref,
  ) => {
    return (
      <Dialog
        ref={ref}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: borderRadius,
            maxWidth: maxWidth,
            width: width,
          },
        }}
        fullWidth
        {...props}
      />
    );
  },
) as ModalComponent;

const Header = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "h-[60px] px-5 border-b flex justify-between items-center",
        className,
      )}
      {...props}
    />
  );
};

const HeaderTitle = (props: HTMLAttributes<HTMLDivElement>) => {
  return <div className="text-base font-medium text-slate-900" {...props} />;
};

const HeaderCloseButton = (props: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      onClick={props.onClick}
      className="rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none h-10 w-10 flex items-center justify-center"
    >
      <X size={20} />
    </button>
  );
};

const ModalBody = (props: HTMLAttributes<HTMLDivElement>) => {
  return <div className="p-6" {...props} />;
};

Modal.Header = Header;
Modal.HeaderTitle = HeaderTitle;
Modal.HeaderCloseButton = HeaderCloseButton;
Modal.Body = ModalBody;

export default Modal;
