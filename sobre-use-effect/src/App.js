import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [contagem, setContagem] = useState(0);

  useEffect(() => {
    console.log("Página carregada")
    document.title='Contagem: ' + contagem
  })

  return (
    <div className="App">
     <p>Contagem:{contagem}</p>
     <button onClick={() =>setContagem(contagem+1)}>Contar</button>
    </div>
  );
}

export default App;
