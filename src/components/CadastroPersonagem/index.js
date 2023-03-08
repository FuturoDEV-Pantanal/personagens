import './styles.css';

export default function CadastroPersonagem() {
  return (
    <section className='cadastro-container'>
        <div className='cadastro-titulo'>Cadastro</div>
        <form className="form-personagem">
          <div className='form-grupo'>
            <label htmlFor="input-nome">Nome: </label>
            <input type="text" required id="input-nome" placeholder="Informe o nome" />
          </div>
          <div className='form-grupo'>
            <label htmlFor="input-serie">Série: </label>
            <input type="text" required id="input-serie" placeholder="Informe a Série" />
          </div>
          <div className='form-grupo'>
            <label htmlFor="input-imagem">URL da Imagem: </label>
            <input type="text" id="input-imagem" placeholder="http://www..." />
          </div>
            <input type="submit" value="Adicionar" className='btn-adicionar' /> 
        </form>
    </section>
  )
}
