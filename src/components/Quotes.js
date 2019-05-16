import React from 'react';
import PropType from 'prop-types';
import Quote from './Quote';

function Quotes({ quotes }) {
  const quoteLis = quotes.map((quote, i) => {
    <li key={i}>
      <Quote quote={quote} />
    </li>;
  });

  return (
    <ul>
      {quoteLis}
    </ul>
  );
}

Quotes.propTypes = {
  quotes: PropTypes.array.isRequired
};

export default Quotes;
