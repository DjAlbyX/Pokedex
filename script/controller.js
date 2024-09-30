const fetchPokemon = () => {
    const url = api + data.searchedPokemon;
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);

            pokemon.name = data.name;
            pokemon.id = data.id;
            pokemon.image = data.sprites['front_default'];
            Pokemons();
            console.log(pokemon);
        })
        .catch((error)=>{
            console.error("Error fetching Pokemon:", error);
        });
};


