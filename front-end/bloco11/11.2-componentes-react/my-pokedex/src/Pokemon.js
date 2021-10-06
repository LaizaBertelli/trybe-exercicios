import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemonObj } = this.props;
    return (
      <div className='pokemon-card'>
        <p>{pokemonObj.name}</p>
        <p>{pokemonObj.type}</p>
        <p>{pokemonObj.averageWeight.value} {pokemonObj.averageWeight.measurementUnit}</p>
        <img src={pokemonObj.image} alt={pokemonObj.name}/>
      </div>
    );
  }
}

export default Pokemon;


//recebe como entrada um objeto que contém informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes:

/*
  nome do pokemon
  tipo do pokemon
  peso médio do pokemon, acompanhado da unidade de medida usada
  imagem do pokemon

*/