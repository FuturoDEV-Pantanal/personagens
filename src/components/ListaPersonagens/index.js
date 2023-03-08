import BlocoPersonagem from '../BlocoPersonagem';
import './styles.css';

export default function ListaPersonagens( { personagens, carregaPersonagens } ) {

    function excluirPersonagem(nome) {
        const filtrados = personagens.filter(p => p.nome !== nome);
        carregaPersonagens(filtrados);  
    }

  return (
    <section className='personagens-container'>
        <div className='lista-titulo'>Personagens</div>
        <div className='lista-dados'>
            {
                personagens.map(pers => <BlocoPersonagem key={pers.nome} 
                    nome={pers.nome} serie={pers.serie} imagem={pers.imagem}
                    excluirPersonagem={excluirPersonagem} />)
            }
        </div>        
    </section>
  )
}

