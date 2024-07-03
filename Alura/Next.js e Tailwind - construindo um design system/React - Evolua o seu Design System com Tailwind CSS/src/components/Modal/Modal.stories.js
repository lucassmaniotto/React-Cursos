import React from "react";
import { Modal } from "./Modal";
import { ModalStoryInfo } from "./ModalStoryInfo";
import { ModalStoryChoice } from "./ModalStoryChoice";

const meta = {
  title: "Design System/Molecules/Modal",
  component: Modal,
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const ModalInfo = {
  args: {
    isOpen: false,
    title: "Modal Info",
  },
  render: (args) => {
    return <ModalStoryInfo {...args} />;
  },
};

export const ModalChoice = {
  args: {
    isOpen: false,
    title: "Do you want to save your changes?",
  },
  render: (args) => {
    return <ModalStoryChoice {...args} />;
  },
};
