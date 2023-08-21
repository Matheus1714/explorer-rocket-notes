import { FiPlus, FiSearch } from 'react-icons/fi'
import { v4 as uuidv4 } from 'uuid'
import * as S from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

export function Home() {
  return (
    <S.Contianer>
      <S.Brand>
        <h1>RocketNotes</h1>
      </S.Brand>

      <Header />

      <S.Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Node" />
        </li>
      </S.Menu>

      <S.Search>
        <Input
          restProps={{ placeholder: 'Pesquisar pelo título' }}
          icon={FiSearch}
        />
      </S.Search>

      <S.Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: 'React',
              tags: [
                {
                  id: uuidv4(),
                  name: 'react',
                },
                {
                  id: uuidv4(),
                  name: 'rocketseat',
                },
              ],
            }}
          />
        </Section>
      </S.Content>

      <S.NewNote>
        <FiPlus /> Criar Nota
      </S.NewNote>
    </S.Contianer>
  )
}
