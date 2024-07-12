import styled from 'styled-components'

export const Container = styled.span`
   margin-right: 5px;

   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_ELEMENTS};
   color: ${({ theme }) => theme.COLORS.COLOR_TAGS};
   padding: .4rem 1.6rem;
   border-radius: 8px;
   font-size: 1.3rem;
`