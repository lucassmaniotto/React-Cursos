import React from "react";
import NextLink from "next/link";

export type LinkProps = {
  children: React.ReactNode;
  href: string;
  disabled?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({
  children,
  href,
  disabled,
  className,
  ...rest
}: LinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
    }
  };

  return (
    <NextLink
      href={href}
      onClick={handleClick}
      aria-disabled={disabled}
      className={` text-primary aria-disabled:text-disabled ${className}`}
      {...rest}
      passHref
    >
      {children}
    </NextLink>
  );
};
