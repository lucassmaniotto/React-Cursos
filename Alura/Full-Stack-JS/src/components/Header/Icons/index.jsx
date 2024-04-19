import styled from "styled-components";

const IconsList = styled.ul`
  display: flex;
  margin-left: auto;
  min-width: 120px;

  li {
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    height: 100%;
    cursor: pointer;
  
    img {
        width: 30px;
        height: 30px;
    }
  }
`;

const icons = ["/icons/perfil.svg", "/icons/sacola.svg"]

export const Icons = () => {
  return (
    <IconsList>
      {icons.map((icon) => (
        <li key={icon}>
          <img src={icon} />
        </li>
      ))}
    </IconsList>
  );
};
