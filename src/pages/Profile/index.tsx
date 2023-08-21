import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import * as S from './styles'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

export function Profile() {
  return (
    <S.Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>
      <S.Form>
        <S.Avatar>
          <img src="https://github.com/matheus1714.png" alt="" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </S.Avatar>
        <Input
          icon={FiUser}
          restProps={{ placeholder: 'Nome do usuário', type: 'text' }}
        />
        <Input
          icon={FiMail}
          restProps={{ placeholder: 'E-mail', type: 'text' }}
        />
        <Input
          icon={FiLock}
          restProps={{ placeholder: 'Senha atual', type: 'password' }}
        />

        <Input
          icon={FiLock}
          restProps={{ placeholder: 'Nova senha', type: 'password' }}
        />

        <Button title="Salvar" />
      </S.Form>
    </S.Container>
  )
}
