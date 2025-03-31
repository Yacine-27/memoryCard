const getPokemonImage = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const json = await response.json();
  return json;
};

export const getMultiplePokemonImages = async (number) => {
  const maxPokemon = 1025;
  const promises = [];
  for (let i = 0; i < number; i++) {
    const randomId = Math.floor(Math.random() * maxPokemon) + 1;
    promises.push(getPokemonImage(randomId));
  }
  const pokemonData = await Promise.all(promises);
  return pokemonData.map((item) => item.sprites.front_default);
};
