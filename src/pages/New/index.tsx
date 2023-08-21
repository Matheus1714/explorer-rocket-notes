import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Textarea } from '../../components/Textarea'
import * as S from './styles'

export function New() {
  return (
    <S.Container>
      <Header />
      <main>
        <S.Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>
          <Input restProps={{ placeholder: 'Título' }} />
          <Textarea restProps={{ placeholder: 'Observações' }} />

          <Section title="Links úteis">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem isNew restProps={{ placeholder: 'Novo Link' }} />
          </Section>
        </S.Form>
      </main>
    </S.Container>
  )
}
