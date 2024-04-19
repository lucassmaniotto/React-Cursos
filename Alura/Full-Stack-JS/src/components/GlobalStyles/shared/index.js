import styled from "styled-components";

const BookList = styled.ul`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  align-items: center;
  width: 100%;
  padding: 0;
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

export { BookList, BookItem };
