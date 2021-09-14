import { createGlobalStyle } from 'styled-components'
import { breakpoints } from './breakpoints'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
      
  *, *::before, *::after {
    box-sizing: inherit;
  }
      
  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button { 
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    max-width: ${breakpoints.tablet};
    overscroll-behavior: none;
    width: 100%;
  }

  #app {
    overflow-x: hidden;
    min-height: 100vh;
    height: 100%;
    padding-bottom: 10px;
    & > div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
  }
`
