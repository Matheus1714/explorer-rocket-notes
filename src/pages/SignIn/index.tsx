import * as S from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn() {
  return (
    <S.Container>
      <S.Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Faça seu login</h2>
        <Input
          icon={FiMail}
          restProps={{ placeholder: 'E-mail', type: 'text' }}
        />

        <Input
          icon={FiLock}
          restProps={{ placeholder: 'Senha', type: 'password' }}
        />

        <Button title="Entrar" />

        <a href="#">Criar Contar</a>
      </S.Form>
      <S.Background />
    </S.Container>
  )
}
