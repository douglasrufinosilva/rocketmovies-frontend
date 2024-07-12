import styled from 'styled-components'

export const Container = styled.section`
   margin: 28px 0;

   > h2 {
      color: ${({ theme }) => theme.COLORS.GRAY};
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 24px;
   }
`