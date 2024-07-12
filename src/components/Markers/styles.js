import styled from "styled-components"

export const Container = styled.div`
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   gap: 2.4rem;
   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PURE_BLACK};
   padding: 2rem 1.5rem;
   border-radius: .8rem;
` 