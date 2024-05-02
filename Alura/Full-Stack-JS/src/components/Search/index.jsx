import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { postFavoriteBook } from "../../services/favorites";
import { getBooks } from "../../services/books";

import Input from "./Input";

import { BookItem, BookList, Section } from "../GlobalStyles/shared";
import { SearchContainer, Subtitle, Title } from "./styles";

export const Search = () => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [dataBooks, setDataBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const books = await getBooks();
    setDataBooks(books);
  };

  const insertFavorite = async (id) => {
    try {
      await postFavoriteBook(id);
      Swal.fire({
        icon: "success",
        title: "Livro adicionado aos favoritos",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro ao adicionar livro aos favoritos",
      });
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    if (!value) {
      setSearchedBooks([]);
      return;
    }

    const searchResult = dataBooks.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );

    setSearchedBooks(searchResult);
  };

  const handleBookClick = (id) => {
    insertFavorite(id);
  }

  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
      <Input
        onChange={(e) => handleSearch(e)}
        placeholder="Escreva sua próxima leitura"
      />
      <Section>
        <BookList>
          {searchedBooks.map((book) => (
            <BookItem key={book.id} onClick={() => handleBookClick(book.id)}>
              <p>{book.title}</p>
              <img src={book.src} alt={book.title} />
            </BookItem>
          ))}
        </BookList>
      </Section>
    </SearchContainer>
  );
};
