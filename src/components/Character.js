import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  return (
    <div>
      <img src={character.image} />
      <p>{character.name}</p>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </div>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired
  }).isRequired
};

export default Character;
