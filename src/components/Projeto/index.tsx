import Paragraph from '../Paragraph'
import Title from '../Title'

import { Card, LinkBTN } from './styles'

const Projeto = () => (
  <Card>
    <Title>Projeto lista de tarefas</Title>
    <Paragraph typeParagraph="secundario">
      Lista de tarefas feita com VueJS
    </Paragraph>
    <LinkBTN> Visualizar</LinkBTN>
  </Card>
)

export default Projeto
