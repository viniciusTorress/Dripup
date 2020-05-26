import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
  }
  body {
    font-size: 1em;
    font-family: 'Ubuntu', sans-serif;
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased !important;
    -webkit-image-smoothing: antialiased !important;
  }
  .imgUsu {
    margin-left: 1.5em;
    width: 12%;
    border-radius: 100%;
    transition: 0.2s;
  }
  .imgUsu:hover {
    filter: brightness(90%);
  }
  .pet {
    border-radius: 100%;
  }
  .back-link {
    display: flex;
    align-items: center;
    margin-top: 1em;
    color: #41414b;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
  }
  .back-link svg {
    margin-right: 8px;
  }
  .back-link:hover {
    opacity: 0.8;
  }

  button {
    color: #fff;
  }

  @media only screen and (max-width: 600px) {
    body {

    }
  }
`;
