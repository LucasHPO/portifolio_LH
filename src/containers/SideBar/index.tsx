import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import Avatar from '../../components/Avatar'

import { BTNTema, Description, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const SideBar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Lucas Hiago</Title>
      <Paragraph typeParagraph="secundario" fontSize={16}>
        LucasHPO
      </Paragraph>
      <Description typeParagraph="principal" fontSize={12}>
        Engenheiro Front-End
      </Description>
      <BTNTema onClick={props.trocaTema}>Trocar tema</BTNTema>
    </SidebarContainer>
  </aside>
)

export default SideBar
