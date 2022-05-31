let pokemons = document.querySelector (".list-pokemons");
let namePokemon = ["Ivysaur", "Venusaur", "Charmander"];
let image = ["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"]
let type = ["water", "fire"]
pokemons.innerHTML = `
<article class="list-pokemons-item">
<div class="list-pokemons-item-content">
  <img
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    alt="pokemon-1"
  />
  <h3>
    Bulbasaur
    <span>gras</span>
  </h3>
</div>
</article>
<article class="list-pokemons-item">
          <div class="list-pokemons-item-content">
            <img
              src= ${image[0]}
              alt="pokemon-1"
            />
            <h3>
              ${namePokemon[0]}
              <span>${type[0]}</span>
            </h3>
          </div>
        </article>
        <article class="list-pokemons-item">
          <div class="list-pokemons-item-content">
            <img
              src=${image[1]}
              alt="pokemon-1"
            />
            <h3>
                ${namePokemon[1]}
              <span>gras</span>
            </h3>
          </div>
        </article>
        <article class="list-pokemons-item">
          <div class="list-pokemons-item-content">
            <img
              src=${image[2]}
              alt="pokemon-1"
            />
            <h3>
            ${namePokemon[2]}
              <span>gras</span>
            </h3>
          </div>
        </article>`