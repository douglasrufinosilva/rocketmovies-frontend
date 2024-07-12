import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { Container, Form, Background } from './styles.js'

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { AiOutlineMail,  } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";

export function SignIn() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const { signIn } = useAuth()

   function handleSignIn() {
      signIn({ email, password })
   }

   return (
      <Container>
         <Form>
            <div className='header'>
               <h1>RocketMovies</h1>
               <p>Aplicação para acompanhar tudo que assistir</p>
               <h2>Faça seu login</h2>
            </div>
            
            <div className='inputs-and-btn'>
               <Input 
                  icon={AiOutlineMail} 
                  type='email'
                  placeholder='E-mail'
                  onChange={e => setEmail(e.target.value)}
               />

               <Input 
                  icon={BiLockAlt} 
                  type='password'
                  placeholder='Senha'
                  onChange={e => setPassword(e.target.value)}
               />

               <Button 
                  title='Entrar'
                  onClick={handleSignIn}
               />
            </div>

            <Link to="/signup">Criar conta</Link>
         </Form>

         <Background />
      </Container>
   )
}

