import { Container } from "./styles"

import { Link } from "react-router-dom"

import { Stars } from "../Stars"
import { Tag } from "../Tag"

export function NoteOfMovie({ data, ...rest }) {

   return (
      <Container {...rest}>
         <Link>
            <header>
               <h2>{data.title}</h2>

               <Stars rating={data.rating}/>
            </header>

            <main>
               <p>
                  {data.description}
               </p>
            </main>

            { data.notesTags && 
               <footer>
                  {
                     data.notesTags.map(tag =>
                        <Tag key={tag.id} title={tag.name} />
                     )
                  }
               </footer>
            }
         </Link>
         
      </Container>   
   )
}
