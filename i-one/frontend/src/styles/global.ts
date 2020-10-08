import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:0;
  }

  body {
    background: #fff;
    color:#660066;
    -webkit-font-smoothing:antialiased;
  }

  body, input, button  {
    font-family:'Ubuntu',serif;
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: 500;
  }

  button {
    cursor:pointer;
  }

  .button-form {
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #39b100;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .button-text {
    padding: 16px 24px;
  }

  .button-icon {
    display: flex;
    padding: 16px 16px;
    background: #41c900;
    border-radius: 0 8px 8px 0;

  }


`;
