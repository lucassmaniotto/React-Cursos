import { useEffect, useState } from "react";
import Input from "./Input";
import { SearchContainer, Section, Subtitle, Title } from "./styles";
import { BookItem, BookList } from "../GlobalStyles/shared";
import { getBooks } from "../../services/books";

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
            <BookItem key={book.id}>
              <p>{book.title}</p>
              <img src={book.src} alt={book.title} />
            </BookItem>
          ))}
        </BookList>
      </Section>
    </SearchContainer>
  );
};
