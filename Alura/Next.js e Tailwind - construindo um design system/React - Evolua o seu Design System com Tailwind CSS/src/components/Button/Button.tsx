import React from "react";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses = {
  primary: {
    enabled: "bg-primary text-white",
    disabled: "bg-disabled text-disabled"
  },
  secondary: {
    enabled: "bg-quaternary text-primary",
    disabled: "bg-disabled text-disabled"
  },
  tertiary: {
    enabled: "text-primary",
    disabled: "text-disabled"
  }
};

const getVariant = (
  variant: ButtonProps["variant"] = "primary",
  disabled: ButtonProps["disabled"]
) => {
  const state = disabled ? "disabled" : "enabled";
  return variantClasses[variant][state];
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
