import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   height: 100vh;

   display: grid;
   grid-template-rows: 11.6rem 10rem auto;
   grid-template-areas: 
   'header'
   'wrapper'
   'main';

   .btn-wrapper {
      grid-area: wrapper;
      margin-top: 3rem;
   }

   .btn {
      margin: 3.8rem 12.3rem 2.8rem;
   }

   main {
      grid-area: main;
      margin: 2rem 12.3rem 15rem;
      
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

   header.cabecalho {
      display: flex;
      flex-direction: column;
      gap: 2rem;
   }

   .title {
      display: inline-flex;
      align-items: center;

      > h2 {
         width: auto;
         font-size: 3.6rem;
         line-height: 50px;
         margin-right: 20px;
      }
      
      .stars {
         flex: 7;
         
         > svg {
            width: 22px;
            height: 22px;
         }
      }
   }


   info {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;
      
      > user {
         display: flex;
         align-items: center;
         gap: .5rem;
         
         > img {
            width: 16px;
            height: 16px;
            border-radius: 50%;
         }
      }
      
      date {
         display: flex;
         align-items: center;
         gap: .8rem;
         svg {
            color: ${({ theme }) => theme.COLORS.PINK};
         }
      }
   }

   .tags {
      display: flex;
      gap: .9rem;
      margin-bottom: 4rem;
   }

   section {

      div > p {
            color: ${({ theme }) => theme.COLORS.WHITE};
            text-align: justify;
            padding-right: 20px;
         }
   }

   button.delete {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      color: ${({ theme }) => theme.COLORS.BLACK};

      margin-top: 3rem;

      padding: .4rem 1.6rem;

      border: none;
      border-radius: 8px;

      font-size: 1.3rem;
      font-weight: 500;
   } 
}
`

