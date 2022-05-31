import pokemons from "./data.js";

function creaNodo()


function contenidoNodo(newImg,newName,newGras ) {
    let imagen = newImg;
    let nombre = newName;
    let varGras = newGras;
    let posicion = document.querySelector(".list-pokemons");

    posicion.innerHTML = `
    <article class="list-pokemons-item">
          <div class="list-pokemons-item-content">
            <img
              src= ${imagen}}
              alt="pokemon-1"
            />
            <h3>
              ${nombre}
              <span>${varGras}</span>
            </h3>
          </div>
        </article>`
}

contenidoNodo('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',"bulbasaur","water");

