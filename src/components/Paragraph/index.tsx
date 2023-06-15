import { P } from './styles'

export type Props = {
  children: string
  typeParagraph?: 'principal' | 'secundario'
  fontSize?: number
}

const Paragraph = ({
  children,
  typeParagraph = 'principal',
  fontSize
}: Props) => (
  <P fontSize={fontSize} typeParagraph={typeParagraph}>
    {children}
  </P>
)

export default Paragraph
