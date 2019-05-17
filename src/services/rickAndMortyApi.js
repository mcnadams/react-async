export const getCharacters = (page = 1) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(({ info, results }) => {
      return {
        totalPages: info.pages,
        characters: results.map(character => ({
          name: character.name,
          species: character.species,
          status: character.status,
          image: character.image
        }))
      };
    });
};
