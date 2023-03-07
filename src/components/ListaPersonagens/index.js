import './styles.css';

export default function ListaPersonagens( { personagens } ) {

    // console.log('dentro do componente de listagem: ', personagens);

  return (
    <section className='personagens-container'>
        <div className='lista-titulo'>Personagens</div>
        <div className='lista-dados'>
            lista dos personagens
        </div>        
    </section>
  )
}
