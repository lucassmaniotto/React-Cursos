import { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from "./Input";

const meta: Meta<InputProps> = {
  title: "Design System/Molecules/Input",
  component: Input,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<InputProps> = {
  args: {
    value: "Input",
  },
};

export const PrimaryDisabled: StoryObj<InputProps> = {
  args: {
    value: "Input",
    disabled: true,
  },
};

export const PrimaryWithLabel: StoryObj<InputProps> = {
  args: {
    label: "Label",
    value: "Input",
  },
};

export const PrimaryDisabledWithLabel: StoryObj<InputProps> = {
  args: {
    label: "Label",
    value: "Input",
    disabled: true,
  },
};

export const Multiline: StoryObj<InputProps> = {
  args: {
    multiline: true,
    value: "Input",
  },
};

export const MultilineDisabled: StoryObj<InputProps> = {
  args: {
    multiline: true,
    value: "Input",
    disabled: true,
  },
};

export const MultilineWithLabel: StoryObj<InputProps> = {
  args: {
    multiline: true,
    label: "Label",
    value: "Input",
  },
};

export const MultilineDisabledWithLabel: StoryObj<InputProps> = {
  args: {
    multiline: true,
    label: "Label",
    value: "Input",
    disabled: true,
  },
};
