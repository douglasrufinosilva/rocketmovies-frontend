import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   width: auto;
   height: 5.6rem;

   padding: ${({ isNew }) => !isNew ? "16px" : "26px 16px"};
   border-radius: 10px;

   background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.DARK_GRAY};

   border: ${({ isNew, theme }) => isNew ? `3px dashed ${theme.COLORS.GRAY}` : 'none'};

   > input {
      color: ${({ theme }) => theme.COLORS.WHITE};
      background: transparent;
      height: 5.6rem;
      
      border: none;
      border-radius: 10px;
      padding: 0 3px;

      font-size: 1.6rem;

      &::placeholder {
         color: ${({ theme }) => theme.COLORS.GRAY};
      }

   }

   button {
      background: transparent;
      color: ${({ theme }) => theme.COLORS.PINK};
      border: none;
      line-height: 24px;
      margin-left: -70px;
      padding: 0 3px;
      display: flex;
      align-items: center;
   }

   .button-delete {
      color: ${({ theme }) => theme.COLORS.RED};
      width: auto;
   }
   
   .button-add {
      color: ${({ theme }) => theme.COLORS.ORANGE};
      width: auto;
   }
`