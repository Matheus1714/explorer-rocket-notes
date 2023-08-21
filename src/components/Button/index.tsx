import * as S from './styles'

interface ButtonProps {
  title: string
  loading?: boolean
}

export function Button({ title, loading = false, ...rest }: ButtonProps) {
  return (
    <S.Container type="button" disabled={loading} {...rest}>
      {loading ? 'Carregando' : title}
    </S.Container>
  )
}
