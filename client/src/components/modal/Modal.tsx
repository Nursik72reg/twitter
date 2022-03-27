import React, { FC } from "react";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
}
const Modal: FC<ModalProps> = ({ title, children, visible, onClose }: ModalProps) => {
  return (
    <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
