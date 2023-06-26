import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${props => props.theme["blue-500"]};
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
    line-height: 160%;
  }

`