import { createRipples } from "react-ripples";
import styled from "styled-components";

const Ripple = createRipples({
  color: "rgba(255, 255, 255, 0.3)",
  during: 2200,
});

const StyledRipple = styled(Ripple)`
  position: relative;
  display: inline-block;
  overflow: hidden;
  cursor: pointer;
`;

export default function MyRipple ({ children }) {
  return (
    <StyledRipple>
      {children}
    </StyledRipple>
  );
}
