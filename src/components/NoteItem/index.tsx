import * as S from './styles'
import { FiPlus, FiX } from 'react-icons/fi'
import { MouseEvent, EventHandler, InputHTMLAttributes } from 'react'

interface NoteItemProps<T = InputHTMLAttributes<HTMLInputElement>> {
  isNew?: boolean
  value?: string
  restProps?: T
  onClick?: EventHandler<MouseEvent<HTMLButtonElement>>
}

export function NoteItem({
  isNew = false,
  value = '',
  onClick,
  restProps,
  ...rest
}: NoteItemProps) {
  return (
    <S.Container $isnew={isNew.toString()}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
        {...restProps}
      />

      <button
        onClick={onClick}
        type="button"
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </S.Container>
  )
}
