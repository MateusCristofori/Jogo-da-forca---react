import { useState } from 'react'
import './App.css'
import TelaJogo from './components/telaDeJogo/TelaJogo'
import TelaInicial from './components/telaInicial/TelaInicial'
import GameOver from './components/gameOver/GameOver'

function App() {
  const estagios = [
    {
      id: 1,
      nome: 'começar'
    },
    {
      id: 2,
      nome: 'jogar'
    },
    {
      id: 3,
      nome: 'fim'
    }
  ]

  const [estagiosDoJogo, setEstagios] = useState(estagios[0].nome)

  const iniciarJogo = () => {
    setEstagios(estagios[1].nome)
  }

  const finalizar = () => {
    setEstagios(estagios[2].nome)
  }

  const reiniciarJogo = () => {
    setEstagios(estagios[0].nome)
  }

  return (
    <div className="App">
      {estagiosDoJogo === 'começar' && <TelaInicial jogar={iniciarJogo} />}
      {estagiosDoJogo === 'jogar' && <TelaJogo finalizar={finalizar} />}
      {estagiosDoJogo === 'fim' && <GameOver reiniciarJogo={reiniciarJogo} />}
    </div>
  )
}

export default App
