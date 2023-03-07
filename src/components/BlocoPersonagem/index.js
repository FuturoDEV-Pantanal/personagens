import './styles.css';

export default function BlocoPersonagem( { nome, serie, imagem } ) {
  return (
    <div className='personagem-container'>
      <div className='personagem-foto'>
        <img src={imagem} alt='foto do personagem' />
      </div>
      <div className='personagem-info'>
        <span className='personagem-info-nome'>{nome}</span>
        <span className='personagem-info-serie'>{serie}</span>
      </div>
      <div className='personagem-botoes'>
        <button>Excluir</button>
      </div>
    </div>
  )
}
