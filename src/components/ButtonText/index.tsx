import * as S from './styles'

interface ButtonTextProps {
  title: string
  isActive?: boolean
}

export function ButtonText({
  title,
  isActive = false,
  ...rest
}: ButtonTextProps) {
  console.log(isActive)
  return (
    <S.Container type="button" $isactive={isActive.toString()} {...rest}>
      {title}
    </S.Container>
  )
}
