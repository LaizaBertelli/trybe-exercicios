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
