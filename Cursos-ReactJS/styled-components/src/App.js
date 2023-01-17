import React from "react";

import Nav from "./Components/Nav";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Container />
    </>
  );
}

export default App;