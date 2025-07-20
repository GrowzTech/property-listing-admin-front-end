import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import Badge from "./Badge";

interface CustomDialogProps {
  title?: string;
  subTitle?: string;
  titleIcon?: ReactNode;
  status?: string;
  description?: string;
  children: ReactNode;
  open?: boolean;
  onOpenChange: (open: boolean) => void;
  width?: string;
}

export const Modal: React.FC<CustomDialogProps> = ({
  title,
  subTitle,
  titleIcon,
  status,
  children,
  open,
  onOpenChange,
  width = "min-w-[600px]",
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`${width} text-black max-h-[90vh] overflow-y-scroll`}
      >
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {titleIcon}
            <p className="font-semibold text-[20px] text-[#0A0A0A]">{title}</p>
            <Badge label={status} color="bg-green-500" />
          </div>
        </div>
        <DialogHeader>
          <DialogTitle className="text-[#333C4C] font-medium text-[16px]">
            {subTitle}
          </DialogTitle>

          <div className="text-sm text-muted-foreground">{children}</div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
