import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Alegreya', serif;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.45;
  }

  a {
    color: inherit;
    transition: color 0.2s;
  }

  a:hover {
    color: #e6e600;
  }

  * {
    box-sizing: border-box;
  }
`

// Remember to update the type in ../styled.d.ts when adding/removing theme fields
export const theme = {
  colors: {
    primary: '#f6f6ee',
    secondary: '#e6d300',
    thirdary: '#ffffe0'
  },
  navbar: {
    height: '100px'
  }
}