import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    font-family: 'Open Sans Condensed';
    padding: 20px 60px;

    @media screen and (max-width: 800px) {
        padding: 10px;
    }
  }
  
  a {
    text-decoration: none;
    color: black;
    :hover {
      text-decoration: none;
      color: #485d85;
    }
  }
  
  * {
    box-sizing: border-box;
  }
`