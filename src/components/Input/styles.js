import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   display: flex;
   align-items: center;

   background-color: ${({ theme }) => theme.COLORS.DARK_GRAY};
   color: ${({ theme }) => theme.COLORS.WHITE};
   
   border-radius: 10px;

   > svg {
      margin-left: 12px;

      width: 2rem;
      height: 1.8rem;

      color: ${({ theme }) => theme.COLORS.GRAY};
   }

   > input {
      width: 100%;
      height: 5.6rem;

      background: transparent;
      
      border: 0;
      padding: 12px 12px 12px 26px;

      color: ${({ theme }) => theme.COLORS.WHITE};

      &::placeholder {
         color: ${({ theme }) => theme.COLORS.GRAY};
      }
   }
`