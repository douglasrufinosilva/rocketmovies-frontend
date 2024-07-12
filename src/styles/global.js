import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   :root {
      font-size: 62.5%;
   }

   body {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};
      color: ${({ theme }) => theme.COLORS.WHITE};
      -webkit-font-smoothing: antialiased;
   }

   body, input, button, textarea {
      font-family: 'Roboto Slab', serif;
      font-size: 1.6rem;
      outline: none;
   }

   h1 {
      color: ${({ theme }) => theme.COLORS.PINK}; 
      font-size: 2.4rem;
   }
   
   a {
      text-decoration: none;
   }

   button, a {
      cursor: pointer;
      transition: filter .2s;
   }

   button:hover, a:hover {
      filter: brightness(.9);
   }
`