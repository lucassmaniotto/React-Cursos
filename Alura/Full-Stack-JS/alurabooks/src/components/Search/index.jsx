import { useState, useEffect } from "react";
import Input from "./Input";
import { BookItem, BookList, SearchContainer, Subtitle, Title } from "./styles";
import searchData from "./searchData.json";

export const Search = () => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const handleSearch = (e) => {
    const value = e.target.value;

    const searchResult = searchData.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );

    setSearchedBooks(searchResult);
  };

  useEffect(() => {
    setSearchedBooks(searchData);
  }, []);


  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
      <Input
        onChange={(e) => handleSearch(e)}
        placeholder="Escreva sua próxima leitura"
      />
      <BookList>
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