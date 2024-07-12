import styled from 'styled-components'

export const Container = styled.span`
   display: flex;
   align-items: center;
   gap: 1rem;
   cursor: pointer;
      
   span {
      color: ${({ theme }) => theme.COLORS.PINK};
      
   }

   svg {
      color: ${({ theme }) => theme.COLORS.PINK};

      width: 1.6rem;
      height: 1.6rem;
   }
`