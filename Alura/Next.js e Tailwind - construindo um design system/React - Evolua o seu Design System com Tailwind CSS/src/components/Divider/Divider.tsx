import React from "react";
import classNames from "classnames";

export type DividerProps = {
  width?: string;
  height?: string;
  bgColor?: "light" | "dark" | "black";
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const colorClassMap = {
  light: "bg-light",
  dark: "bg-dark",
  black: "bg-black",
};

export const Divider = ({
  width,
  height = "1px",
  bgColor = "black",
  children,
  ...rest
}: DividerProps) => {
  const colorClass = colorClassMap[bgColor];

  const barClass = classNames(children ? "w-1/3" : "w-1/2", colorClass);

  const barStyle = {
    height,
  };

  return (
    <div
      className={classNames(width, "flex items-center justify-center")}
      {...rest}
    >
      <div className={barClass} style={barStyle}></div>
      {children && <div className="px-3">{children}</div>}
      <div className={barClass} style={barStyle}></div>
    </div>
  );
};
