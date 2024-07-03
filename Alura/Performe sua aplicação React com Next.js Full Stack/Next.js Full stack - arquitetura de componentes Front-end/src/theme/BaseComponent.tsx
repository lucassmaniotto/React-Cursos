import React from "react";
import styled from "styled-components";
import { StyleSheet } from '@src/theme/StyleSheet';
import { parseStyleSheet } from "@skynexui/responsive_stylesheet";

interface StyledBaseComponentProps {
  tag?: string;
  as?: string;
  $styleSheet?: StyleSheet;
  children?: React.ReactNode;
}

const StyledBaseComponent = styled.div<StyledBaseComponentProps>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ $styleSheet }) => $styleSheet && parseStyleSheet($styleSheet)}
`;

export const BaseComponent: React.FC<StyledBaseComponentProps> = ({
  $styleSheet = {},
  as: Tag = 'div',
  ...props
}) => {
  return <StyledBaseComponent as={Tag} $styleSheet={$styleSheet} {...props} />;
};
