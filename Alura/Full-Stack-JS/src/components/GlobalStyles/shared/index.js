import styled from "styled-components";

const Container = styled.main`
  width: 100%;
`;

const BookList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: 0;
  gap: 40px;
`;

const BookItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  p {
    width: 200px;
  }

  img {
    width: 200px;
  }

  &:hover {
    img {
      opacity: 0.9;
      transition: 0.4s ease-in-out all;
      transform: scale(1.1);
    }
  }
`;

export { Container, BookList, BookItem };
