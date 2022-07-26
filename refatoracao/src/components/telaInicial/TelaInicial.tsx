//react

const TelaInicial = ({ jogar }: any) => {
  return (
    <div>
      <h1>Secret word</h1>
      <p>Clique no botão abaixo para jogar!</p>

      <button onClick={jogar}>Jogar!</button>
    </div>
  )
}

export default TelaInicial
