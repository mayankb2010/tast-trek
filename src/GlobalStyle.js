import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
}

*, ::before, ::after {
  box-sizing: inherit;
}

body {
  font-family: "Roboto", sans-serif;
  background-color: #ebecea;
  word-break: break-word;
  position: relative;
  min-height: 100vh;
}

#loader {
  position: fixed;
  top: 0;
}
`;
