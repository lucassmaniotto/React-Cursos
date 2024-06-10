import React from "react";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const getVariant = (
  variant: ButtonProps["variant"],
  disabled: ButtonProps["disabled"],
) => {
  switch (variant) {
    case "primary":
      return disabled ? "bg-disabled text-disabled" : "bg-primary text-white";
    case "secondary":
      return disabled
        ? "bg-disabled text-disabled"
        : "bg-quaternary text-primary";
    case "tertiary":
    default:
      return disabled ? "text-disabled" : "text-primary";
  }
};

export const Button = ({
  variant = "primary",
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`rounded-md px-6 py-2 ${getVariant(variant, disabled)} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
