import { Logo } from "../Logo";
import { Options } from "./Options";
import { Icons } from "./Icons";

import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: #fff;
  display: flex;
  align-items: center;
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Options />
      <Icons />
    </HeaderStyled>
  );
};
