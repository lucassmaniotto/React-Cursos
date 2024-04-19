import { BookItem, BookList } from "../GlobalStyles/shared";
import newBooks from "./newBooks.json";

import styled from "styled-components";

const Section = styled.section`
  width: 60%;
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  margin: 50px auto 20px;
  border-radius: 10px;
  box-shadow: 20px 20px 10px #00000040;
`;

const Title = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  color: #eb9b00;
  font-size: 36px;
  text-align: center;
  margin: 0;
  border-radius: 10px 10px 0 0;
  text-transform: uppercase;
`;

export const NewBooks = () => {
  return (
    <Section>
      <Title>Últimos Lançamentos</Title>
      <BookList>
        {newBooks.map((book) => (
          <BookItem key={book.id}>
            <img src={book.src} alt={book.title} />
          </BookItem>
        ))}
      </BookList>
    </Section>
  );
};
