import * as S from './styles'

interface TagProps {
  title: string
}

export function Tag({ title, ...rest }: TagProps) {
  return <S.Contianer {...rest}>{title}</S.Contianer>
}
