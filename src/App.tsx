// import Menu from '../src/components/Menu/Menu';
import Header from '../src/components/Header/Header';
import { FontStyles, StylesConteiner } from "./global";
import { createGlobalStyle } from "styled-components";
import HomePage from './pages/HomePage';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    background-color: #fff;
    font-family: "Ferry", "Arial", sans-serif;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: normal;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.17em;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    padding: 0;
    border: none;
    background: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

const App = () => {
  return (
    <StylesConteiner>
      <Header />
      <GlobalStyle />
      <FontStyles />
      {/* <Menu /> */}
      <HomePage /> 
    </StylesConteiner>
  );
};

export default App;
