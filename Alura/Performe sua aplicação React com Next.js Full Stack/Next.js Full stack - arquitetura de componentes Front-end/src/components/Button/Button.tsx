import React from "react";

import ButtonBase, { ButtonBaseProps } from "./ButtonBase";

import { useTheme } from "@src/theme/ThemeProvider";
import { ColorVariant, colorVariantBy, Variant } from "./colorVariantBy";
import { ButtonSize, buttonSize } from "./buttonSize";

interface ButtonProps extends ButtonBaseProps {
  children: React.ReactNode;
  colorVariant?: ColorVariant;
  variant?: Variant;
  size?: ButtonSize;
}

export default function Button({
  children,
  styleSheet,
  fullWidth = false,
  colorVariant = "primary",
  variant = "contained",
  size = "md",
}: ButtonProps) {
  const theme = useTheme();
  return (
    <ButtonBase
      styleSheet={{
        alignSelf: "flex-start",
        ...colorVariantBy(theme, colorVariant, variant),
        ...buttonSize[size],
        ...styleSheet,
      }}
      fullWidth={fullWidth}
    >
      {children}
    </ButtonBase>
  );
}

Button.Base = ButtonBase;
