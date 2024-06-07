import React from "react";

type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={` 
        bg-primary rounded-[8px] px-[32px] py-[12px] text-white 
        ${className}
      `}
    >
      {children}
    </button>
  );
};
