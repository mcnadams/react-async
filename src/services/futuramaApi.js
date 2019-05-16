export const getQuotes = (count = 10) => {
  return fetch(`//futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res => res.json())
    .then(quotes => {
      return quotes;
    });
};
