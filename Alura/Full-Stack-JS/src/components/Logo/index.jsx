import { LogoStyled, LogoTitle, LogoImage } from "./styles";

export const Logo = () => {
  return (
    <LogoStyled>
      <LogoImage src="/images/logo.svg" alt="Alura Books Logo" />
      <LogoTitle>
        <strong>Alura</strong>Books
      </LogoTitle>
    </LogoStyled>
  );
};
