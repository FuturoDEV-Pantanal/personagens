import { useEffect, useState } from 'react';
import ListaPersonagens from './components/ListaPersonagens';
import CadastroPersonagem from './components/CadastroPersonagem';
import './App.css';

function App() {

  const [carregando, setCarregando] = useState(true);  // loading 
  const [personagens, setPersonagens] = useState([]);

  useEffect( () => {
    fetch('dados.json')
      .then(resp => resp.json())
      .then(dados => { 
        setPersonagens(dados);
        setCarregando(false); 
      } )
      .catch(erro => console.log(erro));
  }, []);
  

  if (carregando) {  // Se estiver carregando, mostrar aguarde...
    return (<h1>Aguarde...</h1>);  
  }

  return (
    <div className="App">      
      <ListaPersonagens personagens={personagens} carregaPersonagens={setPersonagens} />
      <CadastroPersonagem personagens={personagens} carregaPersonagens={setPersonagens} />
    </div>
  );
}

export default App;
