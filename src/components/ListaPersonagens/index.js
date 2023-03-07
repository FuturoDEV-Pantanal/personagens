import BlocoPersonagem from '../BlocoPersonagem';
import './styles.css';

export default function ListaPersonagens( { personagens } ) {

  return (
    <section className='personagens-container'>
        <div className='lista-titulo'>Personagens</div>
        <div className='lista-dados'>
            {
                personagens.map(pers => <BlocoPersonagem />)
            }
        </div>        
    </section>
  )
}

