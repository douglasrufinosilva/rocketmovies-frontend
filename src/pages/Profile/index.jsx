import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { Container, Form, Avatar } from './styles'

import { useNavigate } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ReturnButton } from '../../components/ReturnButton'

import { AiOutlineCamera, AiOutlineMail,  } from "react-icons/ai";
import { BiLockAlt, BiUser } from "react-icons/bi";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Profile() {
   const { user, updateProfile } = useAuth()

   const [name, setName] = useState(user.name)
   const [email, setEmail] = useState(user.email)
   const [old_password, setOldPassword] = useState()
   const [new_password, setNewPassword] = useState()

   const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` 
   : avatarPlaceholder

   const [avatar, setAvatar] = useState(avatarUrl)
   const [avatarFile, setAvatarFile] = useState(null)

   async function handleUpdate() {
      const user = {
         name, 
         email,
         old_password,
         new_password
      }

      await updateProfile({ user, avatarFile })
   }

   function handleChangeAvatar(event) {
      const file = event.target.files[0]
      setAvatarFile(file)

      const imagePreview = URL.createObjectURL(file)
      setAvatar(imagePreview)
   }

   const navigate = useNavigate()

   function handleBack() {
      navigate(-1)
   }

   return (
      <Container>
         <header>
            <button 
               onClick={handleBack}
            >
               <ReturnButton 
                  title='Voltar'
               />
            </button>
         </header>

         <Form>
            <Avatar>
               <img 
                  src={avatar}
                  alt="Foto do usuário"
               />
               <label htmlFor="avatar">
                  <AiOutlineCamera />
                  <input 
                     type="file" 
                     id="avatar" 
                     onChange={handleChangeAvatar}
                  />
               </label>
            </Avatar>

            <Input 
               icon={BiUser}
               type="text"
               placeholder="Nome"
               value={name}
               onChange={e => setName(e.target.value)}
            />
            <Input 
               icon={AiOutlineMail}
               type="email"
               placeholder="E-mail"
               value={email}
               onChange={e => setEmail(e.target.value)}
            />
            <Input 
               icon={BiLockAlt}
               type="password"
               placeholder="Senha atual"
               onChange={e => setOldPassword(e.target.value)}
            />
            <Input 
               icon={BiLockAlt}
               type="password"
               placeholder="Nova senha"
               onChange={e => setNewPassword(e.target.value)}
            />
            
            <Button 
               title="Salvar"
               onClick={handleUpdate}
            />
         </Form>
      </Container>
   )
}