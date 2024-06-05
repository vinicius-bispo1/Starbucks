import * as S from"../../Styles"
import cafeLaranja from '../../assets/laranja.png'
import cafeAmarelo from '../../assets/amarelo.png'
import cafeVermelho from '../../assets/vermelho.png'
import laranja2x from '../../assets/laranja2x.png'
import amarelo2x from '../../assets/amarelo2x.png'
import vermelho2x from '../../assets/vermelho2x.png'
import face from '../../assets/face.png'
import insta from '../../assets/insta.png'
import twitter from '../../assets/twitter.png'
import { useEffect, useState } from "react"


export default function Main() {
//  guardando o estado da imagem do cafe e da cor de fundo
  const [sorvete, setSorvete] = useState(laranja2x)
  const [fundo, setFundo] = useState(localStorage.getItem("cafe"))
// função para modificar o estado da cor de fundo
  function FirstItem () {
    setFundo("#0F744B")
  }
  function SecondItem () {
    setFundo("#ECAE00")  
  }
  function ThirdItem () {
    setFundo("#870C0B")   
  }
// useEffect para capitar a mudança na função e executar o switch case
// como default será a cor verde e a imagem laranja2x
// mas asim que clicar ele verificarar nas opções modificarar a imagem e a cor de fundo, deixando salvo no localStorage
  useEffect(() => {
    switch (fundo){
    case "#0F744B":
     setSorvete(laranja2x)
     localStorage.setItem("cafe", "#0F744B")
    break
    case "#ECAE00":
      setSorvete(amarelo2x)
      localStorage.setItem("cafe", "#ECAE00")
    break
    case "#870C0B":
      setSorvete(vermelho2x)
      localStorage.setItem("cafe", "#870C0B")
    break
    default:
      setSorvete(laranja2x)
      setFundo("#0F744B")
  }
  },[FirstItem, SecondItem, ThirdItem])

  return (
    <S.Main>
      <S.BoxTitle>
      <S.Title>Mais que Café Isso é <span>Starbucks</span></S.Title>
      <S.Text>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.
        </S.Text>
      <S.Button href="#">SAIBA MAIS</S.Button>
      </S.BoxTitle>
      <S.BoxImg>
        <img onClick={FirstItem} src={cafeLaranja} alt="imagem de copo de sorvete" />
        <img onClick={SecondItem} src={cafeAmarelo} alt="imagem de copo de sorvete" />
        <img onClick={ThirdItem} src={cafeVermelho} alt="imagem de copo de sorvete" />
      </S.BoxImg>
      <S.BoxImgPrincipal color={fundo}>
        {/* passei uma props indefinida no styled-components e coloquei o useState aqui */}
        <S.SecondBoxImg>
          <img src={sorvete} alt="imagem de copo de sorvete" />
        </S.SecondBoxImg>
        <S.BoxIcone>
         <a href="https://www.facebook.com/StarbucksBrasil/"><img src={face} alt="Icone do facebook" /></a>
         <a href="https://x.com/StarbucksBrasil"><img src={twitter} alt="Icone do Twitter" /></a>
         <a href="https://www.instagram.com/starbucksbrasil/"><img src={insta} alt="Icone do instagram" /></a>
        </S.BoxIcone>
      </S.BoxImgPrincipal>
    </S.Main>
  )
}
