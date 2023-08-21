import * as S from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

export function SignUp() {
  return (
    <S.Container>
      <S.Background />
      <S.Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Crie sua conta</h2>
        <Input
          icon={FiUser}
          restProps={{ placeholder: 'Nome', type: 'text' }}
        />

        <Input
          icon={FiMail}
          restProps={{ placeholder: 'E-mail', type: 'text' }}
        />

        <Input
          icon={FiLock}
          restProps={{ placeholder: 'Senha', type: 'password' }}
        />

        <Button title="Cadastrar" />

        <a href="#">Voltar para o login</a>
      </S.Form>
    </S.Container>
  )
}
