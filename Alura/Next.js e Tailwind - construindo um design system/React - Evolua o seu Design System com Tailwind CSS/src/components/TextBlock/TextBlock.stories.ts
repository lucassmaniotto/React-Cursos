import { Meta, StoryObj } from "@storybook/react";

import { TextBlock, type TextBlockProps } from "./TextBlock";

const meta: Meta<TextBlockProps> = {
  title: "Design System/Molecules/TextBlock",
  component: TextBlock,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["primary", "secondary", "dark"],
      },
    },
    title: {
      type: "string",
    },
    children: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<TextBlockProps> = {
  args: {
    title: "Título",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
};

export const TextBlockPrimary: StoryObj<TextBlockProps> = {
  args: {
    title: "Título",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    type: "primary",
  },
};

export const TextBlockSecondary: StoryObj<TextBlockProps> = {
  args: {
    title: "Título",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    type: "secondary",
  },
};

export const TextBlockTertiary: StoryObj<TextBlockProps> = {
  args: {
    title: "Título",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    type: "dark",
  },
};
