import { useEffect, useState } from "react";
import { deleteFavoriteBook, getFavoriteBooks } from "../../services/favorites";
import Swal from "sweetalert2";

import {
  BookItem,
  BookList,
  Container,
  Section,
} from "../../components/GlobalStyles/shared";
import { FavoriteContainer, Title } from "./styles";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    const response = await getFavoriteBooks();
    setFavorites(response);
  };

  const deleteFavorite = async (id) => {
    try {
      await deleteFavoriteBook(id);
      fetchFavorites();
      Swal.fire({
        icon: "success",
        title: "Livro removido dos favoritos",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro ao remover livro dos favoritos",
      });
    }
  };

  const handleBookClick = (id) => {
    deleteFavorite(id);
  };

  return (
    <Container>
      <FavoriteContainer>
        <Title>Seus favoritos</Title>
        <Section>
          <BookList>
            {favorites.map((book) => (
              <BookItem key={book.id} onClick={() => handleBookClick(book.id)}> 
                <p>{book.title}</p>
                <img src={book.src} alt={book.title} />
              </BookItem>
            ))}
          </BookList>
        </Section>
      </FavoriteContainer>
    </Container>
  );
}

export default Favorites;
