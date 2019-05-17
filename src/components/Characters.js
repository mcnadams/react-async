import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import styles from './Characters.css'

function Characters({ characters }) {
  const characterLis = characters.map((character, i) => {
    return (
      <li key={i}>
        <Character character={character} />
      </li>
    );
  });

  return (
    <ul className={styles.Characters}>
      {characterLis}
    </ul>
  );

}

Characters.propTypes = {
  characters: PropTypes.array
};

export default Characters;
