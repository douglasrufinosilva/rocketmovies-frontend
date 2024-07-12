import styled from 'styled-components'

// import {Link} from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 120px 146px auto;
  grid-template-areas:
    'header'
    'addmovie'
    'main';
`

export const AddMovie = styled.div`
  grid-area: addmovie;

  padding: 0 106px 0 123px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-weight: 400;
    font-size: 32px;
    line-height: 42px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > a {
    width: 207px;

    button {
      font-size: 17px;
      font-weight: 400;
    }
  }

  svg {
    width: 24px;
    height: 24px;
    margin-right: 1rem;
  }
`

export const Content = styled.div`
  grid-area: main;  

  > main {
    display: flex;
    flex-direction: column;
    gap: 24px;

    margin-right: 10px;
  }

  @media(min-width: 1000px) {

  margin: 0 106px 40px 123px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
    border: none;
  }
}
`