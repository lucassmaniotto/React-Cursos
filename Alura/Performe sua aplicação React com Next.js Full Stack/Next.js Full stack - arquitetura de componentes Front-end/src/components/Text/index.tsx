import React from "react";

import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import { useTheme } from "@src/theme/ThemeProvider";
import { ThemeTypographyVariants } from "@src/theme/theme";

interface TextProps {
  tag?: "p" | "li" | "span" | "h1" | "h2" | "h3" | "h4" | "h5";
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
}

export default function Text({
  tag = "p",
  variant = "body2",
  styleSheet,
  ...props
}: TextProps) {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant];

  return (
    <BaseComponent
      $styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet,
      }}
      tag={tag}
      {...props}
    />
  );
}
