import { useEffect, useState } from 'react';
import ListaPersonagens from './components/ListaPersonagens';
import './App.css';

function App() {

  const [personagens, setPersonagens] = useState([]);

  useEffect( () => {
    fetch('dados.json')
      .then(resp => resp.json())
      .then(dados => setPersonagens(dados))
      .catch(erro => console.log(erro));
  }, []);
  
  return (
    <div className="App">
      
      <ListaPersonagens personagens={personagens} />

    </div>
  );
}

export default App;
