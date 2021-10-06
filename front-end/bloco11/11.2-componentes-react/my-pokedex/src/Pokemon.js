import React from 'react';
import PropTypes from 'prop-types';

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

Pokemon.propTypes = {
  pokemonObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired,
  })
}

export default Pokemon;


//recebe como entrada um objeto que contém informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes:

/*
  nome do pokemon
  tipo do pokemon
  peso médio do pokemon, acompanhado da unidade de medida usada
  imagem do pokemon

*/