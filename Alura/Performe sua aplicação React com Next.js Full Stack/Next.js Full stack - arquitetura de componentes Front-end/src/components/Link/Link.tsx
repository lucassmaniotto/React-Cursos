import React from "react";
import NextLink from "next/link";
import Text from "../Text";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeColors, ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariantEnabled?: boolean;
  colorVariant?: ThemeColors;
}

const Link = React.forwardRef(
  (
    {
      href,
      children,
      colorVariantEnabled = true,
      colorVariant = "primary",
      styleSheet,
      ...props
    }: LinkProps,
    ref
  ) => {
    const theme = useTheme();

    const isExternalLink = href.startsWith("http");

    const currentColorSet = {
      color: theme.colors[colorVariant].x500,
      hover: {
        color: theme.colors[colorVariant].x400,
      },
      focus: {
        color: theme.colors[colorVariant].x600,
      },
    };

    const linkProps = {
      ref,
      href,
      children,
      styleSheet: {
        textDecoration: "none",
        outline: "none",
        ...(colorVariantEnabled && {
          color: currentColorSet.color,
        }),
        ...styleSheet,
        hover: {
          ...styleSheet?.hover,
          ...(colorVariantEnabled && {
            color: currentColorSet.hover.color,
          }),
        },
        focus: {
          ...styleSheet?.focus,
          ...(colorVariantEnabled && {
            color: currentColorSet.focus.color,
          }),
        },
      },
      ...props,
    };

    if (isExternalLink) {
      return (
        <Text
          tag="a"
          href={href}
          {...{
            target: "_blank",
            ...linkProps,
          }}
        >
          {children}
        </Text>
      );
    }
    return (
      <NextLink href={href} passHref style={{ textDecoration: "none" }}>
        <Text {...linkProps} />
      </NextLink>
    );
  }
);

export default Link;
