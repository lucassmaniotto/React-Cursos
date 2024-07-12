import BaseComponent from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";
import React from "react";

export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ThemeTypographyVariants;
  tag?: "p" | "li" | "h1" | "h2" | "h3" | "a" | "span" ;
  styleSheet?: StyleSheet;
}

const Text = React.forwardRef(({ styleSheet, variant, tag, ...props }: TextProps, ref) => {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant || "body2"];

  return (
    <BaseComponent
      as={tag || "p"}
      $styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet,
      }}
      ref={ref}
      {...props}
    />
  );
});

export default Text;
