import { Container, Content } from './styles.js'

import { useState } from "react"
import { api } from "../../services/api.js"
import { useAuth } from '../../hooks/auth.jsx'

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { ReturnButton } from '../../components/ReturnButton'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { Markers } from '../../components/Markers'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'

export function Create() {
   const [title, setTitle] = useState("")
   const [rating, setRating] = useState("")
   const [description, setDescription] = useState("")

   const [tags, setTags] = useState([])
   const [newTag, setNewTag] = useState("")

   const { user } = useAuth() 
   const navigate = useNavigate()

   function handleBack() {
      navigate(-1)
   }

   async function handleNewNote() {
      if(!title || !rating || !description) {
         return alert("Digite os campos do filme!")
      }

      if(newTag) {
         return alert("Existem tags que não foram adicionadas. Tem certeza que deseja salvar?")
      }

      await api.post("/notes", {
         username: user.name,
         title, 
         description,
         rating: Number(rating),
         tags
      })

      alert("Nota criada com sucesso!")
      handleBack()
   }

   function handleAddTag() {
      if(newTag.length > 0) {
         setTags(prevState => [...prevState, newTag])
         setNewTag("")
      } else {
         alert("Para adicionar uma tag, ela precisa ser preenchida!")
      }
   }

   function handleRemoveTag(deleted) {
      setTags(prevState => prevState.filter(tag => tag !== deleted))
   }

   return (
      <Container>
         <Header />
         
         <main>
            <Content>
               <Link>
                  <div className="return-btn-div">
                     <ReturnButton 
                        title="Voltar" 
                        onClick={handleBack}
                     />
                  </div>
               </Link>

               <div className='new-movie'>
                  <h2>Novo filme</h2>
               </div>

               <div className="info">
                  <div className='inputs'>
                     <Input 
                        type='text' 
                        placeholder='Título' 
                        onChange={e => setTitle(e.target.value)}
                     />
                     <Input
                        type='number' 
                        placeholder='Sua nota (de 0 a 5)' 
                        onChange={e => setRating(e.target.value)}
                     />
                  </div>

                  <div className='textarea'>
                     <Textarea 
                        placeholder='Observações'
                        onChange={e => setDescription(e.target.value)}
                     />
                  </div>
               </div>

                  <div className='section'>
                     <Section title='Marcadores'>
                        <Markers>
                           {
                              tags.map((tag, index) => (
                                 <NoteItem                                   
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => {handleRemoveTag(tag)}}
                                 />
                              ))
                           }
                           <NoteItem 
                              isNew 
                              placeholder='Nova tag'
                              value={newTag}
                              onChange={e => setNewTag(e.target.value)}
                              onClick={handleAddTag}
                           />
                        </Markers>
                     </Section>
                  </div>

                  <footer>
                     <Button 
                        title='Limpar'                        
                        onClick={() => window.location.reload(true)}
                     />
                     <Button 
                        title='Salvar alterações'
                        onClick={handleNewNote}
                     />
                  </footer>
            </Content>
         </main>
      </Container>
   )
}