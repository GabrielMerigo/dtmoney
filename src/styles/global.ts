import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background:#F0F2F5;
    --red:#E62E4D;
    --blue:#5429CC;

    --blue-light:#6933ff;

    --text-title:#363F5F;
    --text-body:#969CB3;

    --background: #F0F2F5;
    --shape:#ffffff;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width:1080px){
      font-size:93.75%; // 1rem = tamanho do font-size da nossa página 
    }

    @media (max-width:720px){
      font-size: 87.5%;
    }
  }

  body{
    background: var(--background);
    -webkit-font-smoothing:antialiased;
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  button{
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-not-allowed;
  }
`