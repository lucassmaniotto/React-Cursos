/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Modal, type ModalProps } from "./Modal";
import { Button } from "../Button/Button";
import { Typography } from "../Typography/Typography";

export const ModalStoryChoice = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Typography>Your changes will be lost</Typography>
        <div className=" flex flex-col gap-3">
          <Button onClick={() => setIsOpen(false)}>Save changes</Button>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>Don't save</Button>
        </div>
      </Modal>
    </>
  );
};
