import * as S from"../../Styles"
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <S.Header>
        <img src={logo} alt="Logo do starbuks"/>
        <S.BoxMenu>
            <S.Menu>
                <li className="negrito">Home</li>
                <li>Menu</li>
                <li>Novidades</li>
                <li>Contato</li>
            </S.Menu>
        </S.BoxMenu>
    </S.Header>
  )
}
