//react
import { useState } from 'react'
//data
import { Palavras } from '../../data/Palavras'

const TelaJogo = ({ finalizar }: any) => {
  return (
    <div>
      <p>Sua pontuação é de: </p>
      <h1>
        Adivinhe a palavra: <span></span>
      </h1>
      <p>Você ainda tem XXX tentativas.</p>
      <span></span>
      {/* span resposável pela criação dos quadrados das palavras do jogo*/}

      <p>Tente adivinha uma letra.</p>
      <form>
        <input type="text" required name="jogar" />
        <button>jogar!</button>
      </form>
      <p>Letras erradas: </p>
      <button onClick={finalizar}>Finalizar jogo.</button>
    </div>
  )
}

export default TelaJogo
