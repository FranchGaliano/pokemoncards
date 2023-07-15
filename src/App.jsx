import { useState, useEffect } from 'react';
import Card from './components/Card';

function App() {

  const [resultado, setResultado] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [load, setLoad] = useState('true');

  const arreglo = [];

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=649')
    .then((response) => response.json())
    .then((data) => setResultado(data.results.map((item) => {
              fetch(item.url)
              .then((response) => response.json())
              .then((allpokemon) => arreglo.push(allpokemon));
              setPokemon(arreglo);
            }),  ));
    }, []
  );

  setTimeout(() => {setLoad(false)}, 1000);

  return (
    <>      
      <div id="container">
        { load ? ( <p id="Load">Cargando...</p> ) : (
          pokemon.map((poke,i) => <Card key={i} pokemon={poke} />) 
        )}
      </div>
    </>
  )
}

export default App
