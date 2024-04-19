import { Header } from "./components/Header";
import { RecommendedCard } from "./components/RecommendedCard";
import { NewBooks } from "./components/NewBooks";
import { Search } from "./components/Search";

import styled from "styled-components";

const AppContainer = styled.main`
  width: 100%;

  li {
    list-style: none;
  }
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <NewBooks />
      <Search />
      <RecommendedCard 
        title="Talvez você se interesse por..."
        subtitle="Angular 11"
        description="Construindo uma aplicação integrada com a plataforma Google."
        img="/images/livro2.png"
      />
    </AppContainer>
  );
}

export default App;
