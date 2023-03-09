import { useEffect, useRef, useState } from 'react';
import BlocoPersonagem from '../BlocoPersonagem';
import './styles.css';

export default function ListaPersonagens( { personagens, carregaPersonagens } ) {

    const [lista, setLista] = useState(personagens);
    const inputFiltroRef = useRef();

    useEffect(() => {
      setLista(personagens);
    }, [personagens])
    

    function excluirPersonagem(nome) {
        const filtrados = personagens.filter(p => p.nome !== nome);
        carregaPersonagens(filtrados);  
    }

    function filtrarPersonagem() {
        const nome = inputFiltroRef.current.value;
        if (!nome) {
            setLista(personagens);
            return;
        }
        const selecionado = personagens.find(p => p.nome === nome);
        if (selecionado) {
            setLista([selecionado]);
        } else {
            alert('Personagem nao encontrado!')
        }
    }

  return (
    <section className='personagens-container'>
        <div className='lista-titulo'>Personagens</div>
        <div className='filtro'>
            Selecione: 
            <input type='text' ref={inputFiltroRef} />
            <button onClick={ filtrarPersonagem }>Filtrar</button>
        </div>
        <div className='lista-dados'>
            {
                lista.map(pers => <BlocoPersonagem key={pers.nome} 
                    nome={pers.nome} serie={pers.serie} imagem={pers.imagem}
                    excluirPersonagem={excluirPersonagem} />)
            }
        </div>        
    </section>
  )
}
