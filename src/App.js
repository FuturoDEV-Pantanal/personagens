import { useEffect, useState } from 'react';
import ListaPersonagens from './components/ListaPersonagens';
import './App.css';

function App() {

  const [personagens, setPersonagens] = useState([]);

  useEffect( () => {
    fetch('dados.json')
      .then(resp => resp.json())
      .then(dados => new Promise(resolve => setTimeout(() => resolve(dados), 5000)))
      .then(dados => setPersonagens(dados))
      .catch(erro => console.log(erro));
  }, []);
  
  if (personagens.length === 0) {  // Se array de personagens vazio
    return (<h1>Aguarde...</h1>);
  }

  return (
    <div className="App">
      
      <ListaPersonagens personagens={personagens} carregaPersonagens={setPersonagens} />
      
    </div>
  );
}

export default App;
