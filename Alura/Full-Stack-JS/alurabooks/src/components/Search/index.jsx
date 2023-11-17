import { useState } from "react";
import Input from "./Input";
import { SearchContainer, Subtitle, Title } from "./styles";
import { BookItem, BookList } from "../GlobalStyles/shared";

import dataBooks from "./dataBooks.json";

export const Search = () => {
  const [searchedBooks, setSearchedBooks] = useState([]);

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
      <BookList columns={5}>
        {searchedBooks.map((book) => (
          <BookItem key={book.id}>
            <p>{book.title}</p>
            <img src={book.src} alt={book.title} />
          </BookItem>
        ))}
      </BookList>
    </SearchContainer>
  );
};
