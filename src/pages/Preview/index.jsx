import { Container } from './styles'

import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { useAuth } from '../../hooks/auth'
import { useParams } from "react-router-dom"

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'

import { ReturnButton } from '../../components/ReturnButton'
import { Stars } from '../../components/Stars'
import { Tag } from '../../components/Tag'
import { SummarySinapse } from '../../components/SummarySinapse'
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"

import { AiOutlineClockCircle } from "react-icons/ai";

export function Preview() {
   const { user } = useAuth()
   const params = useParams()
   const navigate = useNavigate()

   const [data, setData] = useState(null)

   const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` 
   : avatarPlaceHolder

   async function removeNote() {
      const doYouReallyWant = confirm("Do you really want to delete this note?")

      if(doYouReallyWant) {
         await api.delete(`/notes/${params.id}`)
         navigate(-1)
      }
   }

   useEffect(() => {
      async function fetchNoteDetails() {
         const response = await api.get(`/notes/${params.id}`)

         setData(response.data)
         console.log(data)
      }
      fetchNoteDetails()
   }, [])

   return (
      <Container>
         <Header />

         <Link className='btn-wrapper' to='/'>
            <div className="btn">
               <ReturnButton title="Voltar" />
            </div>
         </Link>

         { data &&
            <main>
               <header className='cabecalho'>

                  <div className='title'>
                     <h2>{data.title}</h2>

                     <Stars
                        className="stars"
                        rating={data.rating}
                     />
                  </div>

                  <info>
                     <user>
                        <img src={avatarURL} alt={`${user.name} img`}/>
                        <span>{user.name}</span>
                     </user>

                     <date>
                        <AiOutlineClockCircle /> {data.created_at}
                     </date>
                  </info>
               
                  <div className='tags'>
                     {
                        data.tag.map(tag => (
                           <Tag 
                              key={String(tag.id)}
                              title={tag.name}
                           />
                        ))
                     }                   
                  </div>
               </header>

               <section className='sinopse'>
                  <SummarySinapse content={data.description}/>
               </section>
               
               <button 
                  className="delete"
                  onClick={removeNote}
               >
                  Excluir
               </button> 

            </main>
         }
      </Container>
   )
}