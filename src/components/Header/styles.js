import styled from 'styled-components'

export const Container = styled.header`
   grid-area: header;
   height: 11.6rem;
   width: 100%;
   border-bottom-width: 1px;
   border-bottom-style: solid;
   border-bottom-color: ${({ theme }) => theme.COLORS.COLOR_BORDERS};
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 6.4rem 12.3rem;
`

export const RocketMovies = styled.div`
   h1 {
      font-weight: 700;
   }
`

export const Search = styled.div`
   width: 63rem;
`

export const Profile = styled.div`
   display: flex;
   align-items: center;
   gap: 1.2rem;

   span {
      display: flex;
      flex-direction: column;

      cursor: pointer;
   }

   span:nth-child(1) {
      color: ${({ theme }) => theme.COLORS.WHITE};  
   }

   span:nth-child(2) {
      color: ${({ theme }) => theme.COLORS.GRAY}; 
      text-align: end;
   }

   img {
      border-radius: 50%;
      width: 6.4rem;
      height: 6.4rem;
   }
`