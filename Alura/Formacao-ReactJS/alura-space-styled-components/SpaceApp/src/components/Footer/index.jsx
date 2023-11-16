import { styled } from "styled-components";

const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  background-color: #04244f;
  padding: 22px;
  box-sizing: border-box;
`;

const ContainerIcon = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    display: inline-block;
    margin-right: 16px;

    a > img {
      width: 32px;
      height: 32px;
    }
  }
`;

const TextFooter = styled.p`
  font-size: 16px;
  color: white;
  margin: 0;
`;

export const Footer = () => {
  return (
    <FooterStyled>
      <ContainerIcon>
        <li>
          <a href="#">
            <img src="/images/social/facebook.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/social/twitter.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/social/instagram.svg" alt="" />
          </a>
        </li>
      </ContainerIcon>
      <TextFooter>
        Desenvolvido por{" "}
        <a href="https://www.github.com/lucassmaniotto" target="_blank" rel="noreferrer">
          Lucas Smaniotto
        </a>
      </TextFooter>
    </FooterStyled>
  );
};
