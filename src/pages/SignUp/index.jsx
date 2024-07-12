import { useState } from 'react'
import { api } from '../../services/api'

import { Container, Form, Background } from './styles.js'

import { Link, useNavigate } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ReturnButton } from '../../components/ReturnButton'

import { AiOutlineMail,  } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { FiUser } from 'react-icons/fi'

export function SignUp() {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const navigate = useNavigate()

   function handleSignUp() {
      if(!name || !email || !password) {
         return alert("Preencha todos os campos!")
      }

      api.post("/users", { name, email, password })
      .then(() => {
         alert("Usuário cadastrado com sucesso!")
         navigate("/")
      }) 
      .catch(error => {
         if(error.response) {
            alert(error.response.data.message)
         } else {
            alert("Não foi possível cadastrar!")
         }
      })
   }


   return (
      <Container>
         <Form>
            <div className='header'>
               <Link to='/'>
                  <h1>RocketMovies</h1>
               </Link>

               <p>Aplicação para acompanhar tudo que assistir</p>
               <h2>Crie sua conta</h2>
            </div>
            
            <div className='inputs-and-btn'>
               <Input 
                  icon={FiUser} 
                  placeholder='Nome'
                  onChange={e => setName(e.target.value)}
               />

               <Input 
                  icon={AiOutlineMail} 
                  placeholder='E-mail'
                  type='email'
                  onChange={e => setEmail(e.target.value)}
               />

               <Input 
                  icon={BiLockAlt} 
                  placeholder='Senha'
                  type='password'
                  onChange={e => setPassword(e.target.value)}
               />

               <Button 
                  title='Criar'
                  onClick={handleSignUp}
               />
            </div>

            <Link to="/">
               <ReturnButton title="Voltar para o login"/>
            </Link>
         </Form>

         <Background />
      </Container>


   )
}