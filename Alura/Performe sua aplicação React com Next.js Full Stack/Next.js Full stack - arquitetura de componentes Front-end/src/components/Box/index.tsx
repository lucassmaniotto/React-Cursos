import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import React from "react";

interface BoxProps {
  tag: any;
  children: React.ReactNode;
  $styleSheet: StyleSheet;
}

export const Box = ({ tag, children, $styleSheet, ...props }: BoxProps) => {
  const Tag = tag || "div";
  return (
    <BaseComponent as={Tag} $styleSheet={$styleSheet} {...props}>
      {children}
    </BaseComponent>
  );
};
