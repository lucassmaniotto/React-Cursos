import { Header } from "./components/Header";
import { Search } from "./components/Search";

import styled from "styled-components";

const AppContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);

  li {
    list-style: none;
  }
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
    </AppContainer>
  );
}

export default App;
