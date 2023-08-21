import * as S from './styles'
import { InputHTMLAttributes } from 'react'

interface TextareaProps<T = InputHTMLAttributes<HTMLTextAreaElement>> {
  value?: string
  restProps?: T
}

export function Textarea({ value = '', restProps, ...rest }: TextareaProps) {
  return (
    <S.Container {...rest} {...restProps}>
      {value}
    </S.Container>
  )
}
