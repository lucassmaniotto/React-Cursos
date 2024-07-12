import React from "react";
import { useRouter } from "next/router";

import Text from "../Text";

import { ThemeTypographyVariants } from "@src/theme/theme";
import { StyleSheet } from "@src/theme/StyleSheet";
import styled from "styled-components";
import MyRipples from "../Ripples/MyRipples";

const StyledButton = styled(Text)<any>`
  ${({ $styleSheet }) => $styleSheet}
`;

export interface ButtonBaseProps {
  children: React.ReactNode;
  textVariant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet;
  href?: string;
  fullWidth?: boolean;
  borderRadiusRipple?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonBase({
  children,
  textVariant,
  styleSheet,
  href,
  fullWidth,
  borderRadiusRipple = "0px",
  ...props
}: ButtonBaseProps) {
  const isLink = Boolean(href);
  const Tag = isLink ? "a" : "button";
  const router = useRouter();
  return (
    <MyRipples width={fullWidth ? "100%" : "auto"} borderRadius={borderRadiusRipple}>
      <StyledButton
        tag={Tag}
        variant={textVariant}
        href={href}
        $styleSheet={{
          border: "none",
          backgroundColor: "transparent",
          color: "inherit",
          outline: "none",
          textDecoration: "none",
          cursor: "pointer",
          ...styleSheet,
        }}
        onClick={(e) => {
          isLink && e.preventDefault();
          isLink && router.push(href);
          !isLink && props.onClick && props.onClick(e);
        }}
        {...props}
      >
        {children}
      </StyledButton>
    </MyRipples>
  );
}
