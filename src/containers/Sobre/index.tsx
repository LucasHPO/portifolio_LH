import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tempora
      voluptate doloribus odit reiciendis mollitia voluptas amet voluptatem
      soluta aperiam laborum debitis beatae a distinctio dicta, corporis quos
      porro quia!
    </Paragraph>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=LucasHPO&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=LucasHPO&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default Sobre
