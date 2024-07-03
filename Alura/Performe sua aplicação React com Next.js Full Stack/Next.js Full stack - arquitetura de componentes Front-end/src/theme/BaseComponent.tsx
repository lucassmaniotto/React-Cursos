import React from "react";
import styled from "styled-components";
import { StyleSheet } from "@src/theme/StyleSheet";
import { parseStyleSheet } from "@skynexui/responsive_stylesheet";

interface StyledBaseComponentProps {
  $styleSheet?: StyleSheet;
  [key: string]: any;
}

const StyledBaseComponent = styled.div<StyledBaseComponentProps>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ $styleSheet }) => $styleSheet && parseStyleSheet($styleSheet)}
`;

const BaseComponent: React.FC<StyledBaseComponentProps> = ({
  styleSheet = {},
  ...rest
}) => {
  return <StyledBaseComponent $styleSheet={styleSheet} {...rest} />;
};

export default BaseComponent;
