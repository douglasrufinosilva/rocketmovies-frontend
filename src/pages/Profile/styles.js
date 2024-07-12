import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;

   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};

   > header {
      width: 100%;
      height: 144px;

      display: flex;
      align-items: center;

      padding: 0 14.4rem;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MATTE};

      > button {
         background: none;
         border: none;
      }
   }
`

export const Form = styled.div`
   width: 34rem;

   margin: -93px 0;

   display: flex;
   flex-direction: column;
   align-items: center;

   gap: 8px;

   > div:nth-child(3) {
      margin-bottom: 10px;
   }

   > button {
      margin-top: 10px;
   }
`

export const Avatar = styled.div`
   position: relative;

   margin-bottom: 6.4rem;

   img {
      width: 18.6rem;
      height: 18.6rem;
      border-radius: 50%;
   }

   label {
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 50%;

      background-color: ${({ theme }) => theme.COLORS.PINK};

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      left: 127px;
      top: 138px;
   }

   svg {
      cursor: pointer;

      color: ${({ theme }) => theme.COLORS.BLACK};

      width: 2.2rem;
      height: 2.2rem;
   }

   input {
      display: none;
   }
`