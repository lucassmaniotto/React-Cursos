import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  // [NextJS Reset]
    html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }
  body {
    display: flex;
    min-height: 100%;
    flex: 1;
    flex-direction: column;
  }
  #__next {
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: flex-start;
    flex-shrink: 0;
    min-height: 100vh;
  }
  // ============
  // [Dark Mode Styles]
  /* body.dark {
    color: #FFFFFF; 
    background-color: #111111;
  } */
  // ============
  // [Reset Styles]
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
