import * as S from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details() {
  return (
    <S.Container>
      <Header />
      <main>
        <S.Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum amet
            asperiores iure possimus similique ducimus animi necessitatibus
            magni distinctio nulla. Cumque quia ducimus maxime adipisci voluptas
            ab, autem ipsa explicabo. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque aperiam sunt officiis fugit mollitia nemo
            iusto, quod, voluptatem veniam dicta asperiores. Ad libero doloribus
            pariatur laborum. Nam corporis culpa fugiat. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Quo numquam quos asperiores odio.
            Maiores soluta veniam molestias corrupti, eveniet suscipit obcaecati
            sed, repellendus quia sint amet placeat, magni id qui!
          </p>

          <Section title="Links úteis">
            <S.Links>
              <li>
                <a href="#">http://github.com</a>
              </li>
            </S.Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </S.Content>
      </main>
    </S.Container>
  )
}
