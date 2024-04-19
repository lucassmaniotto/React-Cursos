import { RecommendedCard } from "../../components/RecommendedCard";
import { NewBooks } from "../../components/NewBooks";
import { Search } from "../../components/Search";

import { Container } from "../../components/GlobalStyles/shared";

function Home() {
  return (
    <Container>
      <NewBooks />
      <Search />
      <RecommendedCard
        title="Talvez você se interesse por..."
        subtitle="Angular 11"
        description="Construindo uma aplicação integrada com a plataforma Google."
        img="/images/livro2.png"
      />
    </Container>
  );
}

export default Home;
