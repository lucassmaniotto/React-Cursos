import { Input } from "../Input";
import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;

  img {
    max-width: 212px;
  }
`;

export const Header = ({ setFilter }) => {
  return (
    <HeaderStyled>
      <img src="/images/logo.png" alt="SpaceApp Logo" />
      <Input setFilter={setFilter} />
    </HeaderStyled>
  );
};
