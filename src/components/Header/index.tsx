import { RiShutDownLine } from 'react-icons/ri'
import * as S from './styles'

export function Header() {
  return (
    <S.Contianer>
      <S.Profile>
        <img src="https://github.com/matheus1714.png" alt="Foto do usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>Matheus Mota</strong>
        </div>
      </S.Profile>
      <S.Logout>
        <RiShutDownLine />
      </S.Logout>
    </S.Contianer>
  )
}
