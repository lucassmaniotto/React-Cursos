import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoStyled = styled(Link)`
  font-size: 1.5em;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
`;

export const LogoTitle = styled.h1`
  font-size: 1.5em;
  font-weight: 400;

  strong {
    font-weight: 700;
  }
`;

export const LogoImage = styled.img`
  margin: 0 0.5rem;
`;
