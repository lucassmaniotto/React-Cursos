import React from "react";
import styled from "styled-components";
import { StyleSheet } from "@src/theme/StyleSheet";
import { parseStyleSheet } from "@skynexui/responsive_stylesheet";

interface StyledBaseComponentProps {
  children?: React.ReactNode;
  $styleSheet?: StyleSheet;
  as?: string;
}

const StyledBaseComponent = styled.div<StyledBaseComponentProps>`
  ${({ $styleSheet }) => $styleSheet && parseStyleSheet($styleSheet)}
`;

export const BaseComponent: React.FC<StyledBaseComponentProps> = ({
  $styleSheet = {},
  ...props
}) => {
  return <StyledBaseComponent $styleSheet={$styleSheet} {...props} />;
};
