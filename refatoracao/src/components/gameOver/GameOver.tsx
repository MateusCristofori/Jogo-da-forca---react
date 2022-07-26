const GameOver = ({ reiniciarJogo }: any) => {
  return (
    <div>
      Fim de jogo.
      <button onClick={reiniciarJogo}>
        Clique para voltar para tela principal.
      </button>
    </div>
  )
}

export default GameOver
