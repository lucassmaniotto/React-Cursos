import styled from "styled-components";

const ListStyled = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#7B78E5" : "#D9D9D9")};
  display: flex;
  align-items: center;
  gap: 22px;
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
`;

export const ItemList = ({
  activeIcon,
  inactiveIcon,
  children,
  active = false,
}) => {
  return (
    <ListStyled $active={active}>
      <img src={active ? activeIcon : inactiveIcon} alt={children} />
      {children}
    </ListStyled>
  );
};
