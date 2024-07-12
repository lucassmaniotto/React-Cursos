import { createRipples } from "react-ripples";
import styled from "styled-components";

interface StyledRippleProps {
  width?: string;
  borderRadius?: string;
}

const Ripple = createRipples({
  color: "rgba(255, 255, 255, 0.3)",
  during: 1500,
});

const StyledRipple = styled.div<StyledRippleProps>`
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius};

  & > * {
    width: ${({ width }) => width};
  }
`;

export default function MyRipple({
  children,
  width,
  borderRadius,
}: StyledRippleProps & { children: React.ReactNode }) {
  return (
    <StyledRipple width={width} borderRadius={borderRadius}>
      <Ripple>{children}</Ripple>
    </StyledRipple>
  );
}
