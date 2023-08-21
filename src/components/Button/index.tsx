import * as S from './styles'

interface ButtonProps {
  title: string
}

export function Button({ title }: ButtonProps) {
  return <S.Container type="button">{title}</S.Container>
}
