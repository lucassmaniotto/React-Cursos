import React from "react";
import classNames from "classnames";

import { AvatarIcon } from "./AvatarIcon";
import { AvatarImage } from "./AvatarImage";

export type AvatarProps = {
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
  imgSrc?: string;
  description?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const avatarSizeMap = {
  xs: "w-5 h-5",
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-9 h-9",
};

export const Avatar = ({
  size = "xs",
  className,
  imgSrc,
  description = "",
  ...rest
}: AvatarProps) => {
  const avatarSizeClass = avatarSizeMap[size];

  const avatarComponent = imgSrc ? (
    <AvatarImage src={imgSrc} altDescription={description} />
  ) : (
    <AvatarIcon />
  );

  return (
    <div
      className={classNames(
        `
        flex items-center justify-center 
        rounded-full 
        relative 
        bg-slate-100
        text-slate-500
        overflow-hidden
        `,
        className,
        avatarSizeClass,
      )}
      {...rest}
    >
      {avatarComponent}
    </div>
  );
};
