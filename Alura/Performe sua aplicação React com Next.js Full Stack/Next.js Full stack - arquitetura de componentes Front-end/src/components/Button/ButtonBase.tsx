import React from "react";

import Text from "../Text";
import Link from "../Link/Link";

import { ThemeTypographyVariants } from "@src/theme/theme";
import { StyleSheet } from "@src/theme/StyleSheet";
import styled from "styled-components";
import MyRipples from "../Ripples/MyRipples";

const StyledButton = styled(Text)<any>`
  ${({ $styleSheet }) => $styleSheet}
`;

interface ButtonBaseProps {
  children: React.ReactNode;
  textVariant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonBase({
  children,
  textVariant,
  styleSheet,
  href,
  ...props
}: ButtonBaseProps) {
  const isLink = Boolean(href);
  const Tag = isLink ? "a" : "button";
  return (
    <MyRipples>
      <StyledButton
        tag={Tag}
        variant={textVariant}
        $styleSheet={{
          border: "none",
          backgroundColor: "transparent",
          color: "inherit",
          outline: "none",
          textDecoration: "none",
          width: "100%",
          ...styleSheet,
        }}
        onClick={(e) => {
          !isLink && props.onClick && props.onClick(e);
        }}
        {...props}
      >
        {isLink ? <Link href={href}>{children}</Link> : children}
      </StyledButton>
    </MyRipples>
  );
}
