export const getQuotes = (count = 10) => {
  return fetch(`https://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, quotes]) => {
      if(!ok) throw 'Unable to fetch quotes';
      return quotes;
    });
};
