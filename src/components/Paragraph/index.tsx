import { P } from './styles'

export type Props = {
  children: string
  typeParagraph?: 'principal' | 'secundario'
}

const Paragraph = ({ children, typeParagraph = 'principal' }: Props) => (
  <P typeParagraph={typeParagraph}>{children}</P>
)

export default Paragraph
