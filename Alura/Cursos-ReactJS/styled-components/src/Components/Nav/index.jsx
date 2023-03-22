import React from "react";
import styled from "styled-components";
import bank_logo from "../../assets/images/bank_logo.svg";
import { primaryColor } from "../UI/variables";

const StyledHeader = styled.nav`
  background-color: ${primaryColor};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`
const Logo = styled.img`
  height: 50px;
  width: 50px;
`

const StyledBtn = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  /*   
  color: ${(props) => props.primary ? primaryColor : "white"}};
  background  ${(props) => props.primary ? "white" : primaryColor};
  */
  color: white;

  ${props => props.primary && `
    background-color: white;
    color: ${primaryColor};
  `}
`

const Nav = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <StyledBtn primary href="https://google.com">Ajuda</StyledBtn>
        <StyledBtn href="https://google.com">Sair</StyledBtn>
      </div>
    </StyledHeader>
  );
};

export default Nav;
