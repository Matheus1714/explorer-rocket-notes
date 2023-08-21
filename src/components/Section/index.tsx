import * as S from './styles'
import { ReactNode } from 'react'

interface SectionProps {
  title: string
  children: ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <S.Contianer>
      <h2>{title}</h2>
      {children}
    </S.Contianer>
  )
}
