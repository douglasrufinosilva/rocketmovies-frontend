import styled from 'styled-components'

export const Container = styled.textarea`
   background-color: ${({ theme }) => theme.COLORS.DARK_GRAY};
   color: ${({ theme }) => theme.COLORS.WHITE};
   
   width: 100%;
   height: 27.4rem;
   padding: 1.9rem 1.6rem;
   padding: 12px 1.9rem 1.6rem 1.9rem;

   resize: none;
   
   border-radius: 10px;
   border: none;
`