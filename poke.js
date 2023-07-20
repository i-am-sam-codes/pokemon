const API_URL = 'https://pokeapi.co/api/v2/pokemon';
const root = document.getElementById("root");
const form = document.getElementById("addPokemonForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const pokemonName = document.getElementById("pokemonName").value.trim();
    fetch(`${API_URL}/${pokemonName}`)
        .then((response) => response.json())
        .then((newPokemon) => {
            const div = document.createElement("div");
            const image = document.createElement("img");
            const name = document.createElement("h1");
            div.className = "card";
            // getting info form fetched pokemon object
            image.src = newPokemon.sprites.other.dream_world.front_default;
            name.textContent = newPokemon.name;

            div.appendChild(name);
            div.appendChild(image);
            root.appendChild(div);
        })
        .catch((error) => {
            // Handle any errors that occur during the fetch request
            console.error("Error fetching Pokémon:", error);
        });
});