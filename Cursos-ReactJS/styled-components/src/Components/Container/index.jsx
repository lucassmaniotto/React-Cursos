import React from "react";
import styled from "styled-components";
import { lightBackground } from "../UI/variables";

import Title from "../Title";
import Account from "../Account";

const Container = styled.div`
  background-color: ${lightBackground};
  min-height: 90vh;
  padding: 0px 15vw;
`

const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const ContainerWrapper = () => {
  return (
    <Container>
      <Title>Olá Fulano!</Title>
      <Content>
        <Account>Conta Corrente</Account>
        <Account>Conta Poupança</Account>
      </Content>
    </Container>
  );
};

export default ContainerWrapper;
