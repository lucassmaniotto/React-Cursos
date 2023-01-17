import React from "react";

import Title from "../Title";
import Account from "../Account";

const Container = () => {
  return (
    <div className="container">
      <Title>Olá Fulano!</Title>
      <section className="conteudo">
        <Account />
      </section>
    </div>
  );
};

export default Container;
