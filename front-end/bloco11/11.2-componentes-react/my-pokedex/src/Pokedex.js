import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends React.Component {
  render() {
    return (
      <section>
        {
          pokemons.map((pokemon) => {
            return <Pokemon key={pokemon.name} pokemonObj={pokemon}/>
          })
        }
      </section>
    );
  }
}

export default Pokedex;
