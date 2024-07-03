import { Meta, StoryObj } from "@storybook/react";

import { Avatar, type AvatarProps } from "./Avatar";

const meta: Meta<AvatarProps> = {
  title: "Design System/Atoms/Avatar",
  component: Avatar,
  argTypes: {
    className: { type: "string" },
    size: {
      control: {
        type: "radio",
        options: ["xs", "sm", "md", "lg"],
      },
    },
  },
};

export default meta;

export const Primary: StoryObj<AvatarProps> = {
  args: {},
};

const randomUserImage = () => {
  const genders = ["men", "women"];
  const randomUserGender = genders[Math.floor(Math.random() * genders.length)];
  const randomUserImageNumber = Math.floor(Math.random() * 100);
  return `https://randomuser.me/api/portraits/${randomUserGender}/${randomUserImageNumber}.jpg`;
}

export const WithImage: StoryObj<AvatarProps> = {
  args: {
    size: "lg",
    imgSrc: randomUserImage(),
  },
};
