import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Container, RocketMovies, Search, Profile } from './styles'

import { Input } from '../Input'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export function Header({ onChange }) {
   const { signOut, user } = useAuth()
   const navigate = useNavigate()

   const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` 
                                 : avatarPlaceholder

   function handleBack() {
      navigate("/profile")
   }

   return (
      <Container>
         <RocketMovies>
            <Link to="/"><h1>RocketMovies</h1></Link>
         </RocketMovies>

         <Search>
            <Input 
               placeholder="Pesquisar pelo título" 
               onChange={onChange}
            />
         </Search>

         <Profile>
            <div>
               <span onClick={handleBack}>
                  {user.name}
               </span>
               <span 
                  onClick={signOut}
               >
                  sair
               </span>
            </div>

            <Link to='/profile'>
               <img 
                  src={avatarURL} 
                  alt={user.name} />
            </Link>
         </Profile>
      </Container>
   )
}