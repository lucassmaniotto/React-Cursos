import { Link } from "react-router-dom";
import styled from "styled-components";

const OptionsList = styled.ul`
  display: flex;

  a {
    text-decoration: none;
    color: inherit;
  }

  a > li {
    margin-right: 20px;
    min-width: 120px;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    height: 100%;
    cursor: pointer;
    font-weight: 400;
  }
`;

const textOptions = ["Categorias", "Minha Estante", "Favoritos"];


export const Options = () => {
  return (
    <OptionsList>
      {textOptions.map((text) => (
        <Link to={`/${text.toLocaleLowerCase()}`} key={text}>
          <li key={text}>{text}</li>
        </Link>
      ))}
    </OptionsList>
  );
};
