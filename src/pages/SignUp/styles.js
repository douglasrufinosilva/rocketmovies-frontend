import styled from 'styled-components'

import movietheater  from '../../assets/movietheater.png'

export const Container = styled.div`
   height: 100vh;
   display: flex;
   align-items: stretch;
`

export const Form = styled.form`
   display: flex;
   flex: .4;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 4.8rem;
   margin-top: -5rem;
   padding: 0 13.6rem;

   .header {
      display: flex;
      flex-direction: column;
      width: 34rem;
      text-align: start;

      > a h1 {
         font-size: 4.8rem;
      }

      > p {
         font-size: 1.4rem;
         color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
         margin-bottom: 4.8rem;
      }
   }

   .inputs-and-btn {
      width: 34rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      > button {
         margin-top: 1rem;
      }
   }

   > a {
      color: ${({ theme }) => theme.COLORS.PINK};
   }
`

export const Background = styled.div`
   flex: 1;
   background: url(${movietheater}) no-repeat center;
   background-size: cover;
   opacity: .4;
`