import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --y200: #FFC400;
    --r400: #BF2600;
    --t200: #00C7E6;
    --n10: #FAFBFC;
    --n40: #DFE1E6;
    --n60: #B3BAC5;
    --n400: #505F79;
    --n900: #091E42;
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--n10);
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
