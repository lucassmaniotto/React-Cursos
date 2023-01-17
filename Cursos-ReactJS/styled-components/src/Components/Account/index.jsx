import React, { useState } from "react";
import styled from "styled-components";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

import { Icon, Box, Button, Detail, Balance } from "../../Components/UI";

const IconMargin = styled(Icon)`
  margin-top: 2px;
`;

const Account = ({ children }) => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>{children}</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <Icon src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Balance>
            <Detail>R$</Detail> 0,00{" "}
          </Balance>
        ) : null}
      </div>

      <Button className="btn" onClick={toggleHandler}>
        <IconMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Button>
    </Box>
  );
};

export default Account;
