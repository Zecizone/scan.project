import styled from 'styled-components';

// Определение цветов
export const colors = {
    yellowMellow: "#fbe69b",
    lightBrown: "#be8b7b",
    pearl: "#fdf2e9",
    lightBlue: "#93CEF0",
  };
  
  // Варианты цветов
  export const ColorVariables = styled.div`
    :root {
      --primary-color: #029491;
      --secondary-color: #000000;
      --accent-color: #FFFFFF;
      --sunshine-yellow: #FFB64F;
      --skyline-blue: #7CE3E1;
      --deep-blue: #5970FF;
    }
  `;
  
  // Шрифты
  export const FontStyles = styled.div`
    @font-face {
      font-family: "Ferry";
      font-style: normal;
      font-weight: 900;
      src: local("Ferry"),
           url("/src/assets/fonts/Ferry-Black.woff") format("woff");
    }
  
    @font-face {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      src: local("Inter"),
           url("/src/assets/fonts/Inter-Regular.woff2") format("woff2"),
           url("/src/assets/fonts/Inter-Regular.woff") format("woff");
    }
  `;

  