
function View() {
    app.innerHTML = /*html*/`
    <h1>Pokedex<h1>
    Search a Pokemon:
    <div>
    <input 
    onchange = "data.searchedPokemon = this.value; View(); fetchPokemon();"
    />
    </div>
    <div id="pokemoninfo"></div>
    `;
}

const Pokemons = () => {
    const pokemoninfo = document.getElementById('pokemoninfo');
    pokemoninfo.innerHTML = /*html*/`
    <table>
    
        <tr>
            <td colspan="2" style="text-align: center;">
                <img src="${pokemon.image}" alt="${pokemon.name}" />
            </td>
        </tr>
        <tr>
            <th>Name:</th>
            <td>${pokemon.name}</td>
        </tr>
        <tr>
            <th>ID:</th>
            <td>${pokemon.id}</td>
        </tr>
        </table>
    `;
}
View();