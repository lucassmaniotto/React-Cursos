import styled from "styled-components";

const SearchContainer = styled.section`
  //background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const BookList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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

`;

export { SearchContainer, Title, Subtitle, BookList, BookItem };
