import { Container, AddMovie, Content } from './styles'

import { useState, useEffect } from "react"
import { api } from "../../services/api"

import { Link, useNavigate} from 'react-router-dom'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { NoteOfMovie } from '../../components/NoteOfMovie'

import { FiPlus } from "react-icons/fi";

export function Home() {
   const [search, setSearch] = useState("")
   const [notes, setNotes] = useState([])

   const navigate = useNavigate()

   function handleDetails(id) {
      navigate(`/preview/${id}`)
   }

   useEffect(() => {
      async function fetchNotes() {
         const response = await api.get(`/notes?title=${search}`)
         setNotes(response.data)
      }

      fetchNotes()
   }, [search])

   return (
      <Container>
         <Header
            onChange={e => setSearch(e.target.value)}
         />

         <AddMovie>
            <h1>Meus filmes</h1>

            <Link to='/create'>
               <Button 
                  icon={FiPlus} 
                  title="Adicionar filme">
               </Button>
            </Link>
         </AddMovie>
         
         <Content>
            <main>
               {
                  notes.map(note => (
                     <NoteOfMovie
                        key={String(note.id)}
                        data={note}
                        onClick={() => handleDetails(note.id)}
                     />
                  ))
               }
            </main>
         </Content>
      </Container>
   )
}