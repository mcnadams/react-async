import React from 'react';
import PropType from 'prop-types';
import Quote from './Quote';
import styles from './Quotes.css';

function Quotes({ quotes }) {
  const quoteLis = quotes.map((quote, i) => {
    return (
      <li key={i}>
        <Quote quote={quote} />
      </li>
    );
  });

  return (
    <ul className={styles.Quotes}>
      {quoteLis}
    </ul>
  );
}

Quotes.propTypes = {
  quotes: PropType.array.isRequired
};

export default Quotes;
