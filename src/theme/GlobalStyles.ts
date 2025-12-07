import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  /* ============================================
     Reset CSS Simples
     ============================================ */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* ============================================
     Configurações Globais
     ============================================ */
  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background: #000000;
    color: #FFFFFF;
    font-family: "DM Sans", sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* ============================================
     Elementos Base
     ============================================ */
  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    color: inherit;
  }

  input,
  textarea,
  select {
    font-family: inherit;
    color: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  /* ============================================
     Scrollbar Minimalista
     ============================================ */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #000000;
  }

  ::-webkit-scrollbar-thumb {
    background: #333333;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555555;
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #333333 #000000;
  }
`
