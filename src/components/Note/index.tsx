import * as S from './styles'

import { Tag } from '../Tag'

interface TagType {
  id: string
  name: string
}

export interface Data {
  title: string
  tags: TagType[]
}

interface NoteProps {
  data: Data
}

export function Note({ data, ...rest }: NoteProps) {
  return (
    <S.Container {...rest}>
      <h1>{data.title}</h1>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </S.Container>
  )
}
