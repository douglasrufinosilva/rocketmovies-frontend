import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   height: 100vh;

   display: flex;
   flex-direction: column;

   main {
      margin: 4rem 12.3rem 8.5rem;
      padding-right: 3rem;
      
      overflow-y: auto;
      scroll-behavior: smooth;

      ::-webkit-scrollbar-track {
         background: none;
      }

      ::-webkit-scrollbar {
         width: 8px;
      }

      ::-webkit-scrollbar-thumb {
         background-color: ${({theme})=> theme.COLORS.PINK}; 
         border-radius: 8px; 
         border: none; 
      }

      ::-webkit-scrollbar-thumb:vertical {
         height: 5px;
      }
   }
`

export const Content = styled.div`
   .return-btn-div {
      margin-bottom: 2.4rem;
   }

   .new-movie {
      margin-bottom: 4rem;

      > h2 {
         font-size: 32px;
      }
   }

   .info {
      .inputs {
         display: flex;
         gap: 4rem;
         margin-bottom: 4rem;
      }  
   }

   footer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4rem;
      margin-bottom: 2rem;

      > button:nth-child(1) {
         background: ${({ theme }) => theme.COLORS.BACKGROUND_PURE_BLACK};
         color: ${({ theme }) => theme.COLORS.PINK};
      }
   }
`
