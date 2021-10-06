import './App.css';
import Pokemon from './Pokemon';
import pokemons from './data';

function App() {
  return (
    <main className='main'>
      <h1 className='title'>Pokedex</h1>
      <section>
        {
          pokemons.map((pokemon) => {
            return <Pokemon key={pokemon.name} pokemonObj={pokemon}/>
          })
        }
      </section>
    </main>
  );
}

export default App;
