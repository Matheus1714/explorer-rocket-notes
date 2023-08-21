import * as S from './styles'
import { ComponentType, InputHTMLAttributes } from 'react'

interface InputProps<T = InputHTMLAttributes<HTMLInputElement>> {
  icon: ComponentType<{ size: number }>
  restProps?: T
}

export function Input({ icon: Icon, restProps, ...rest }: InputProps) {
  return (
    <S.Container>
      {Icon && <Icon size={20} />}
      <input {...rest} {...restProps} />
    </S.Container>
  )
}
