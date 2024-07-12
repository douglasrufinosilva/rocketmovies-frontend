import { Container } from './styles'

import { ImArrowLeft2 } from "react-icons/im";

export function ReturnButton({ title, ...rest }) {
   return (
      <Container {...rest}>
         <ImArrowLeft2 /> <span>{title}</span>
      </Container>
   )
}

