import styled from "styled-components";
import { ItemList } from "./ItemList";

const ListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

export const SideBar = () => {
  return (
    <aside>
      <nav>
        <ListStyled>
          <ItemList
            activeIcon="icons/home-ativo.png"
            inactiveIcon="icons/home-inativo.png"
            active={true}
          >
            Início
          </ItemList>
          <ItemList
            activeIcon="icons/mais-vistas-ativo.png"
            inactiveIcon="icons/mais-vistas-inativo.png"
          >
            Mais vistas
          </ItemList>
          <ItemList
            activeIcon="icons/mais-curtidas-ativo.png"
            inactiveIcon="icons/mais-curtidas-inativo.png"
          >
            Mais curtidas
          </ItemList>
          <ItemList
            activeIcon="icons/novas-ativo.png"
            inactiveIcon="icons/novas-inativo.png"
          >
            Novas
          </ItemList>
          <ItemList
            activeIcon="icons/surpreenda-me-ativo.png"
            inactiveIcon="icons/surpreenda-me-inativo.png"
          >
            Surpreenda-me
          </ItemList>
        </ListStyled>
      </nav>
    </aside>
  );
};
