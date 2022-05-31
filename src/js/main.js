import pokemons from "./data.js";
//var concatNodes =``;

function newNode(newImg,newName,newType){
    let image = newImg;
    let nombre = newName;
    let varType = newType;
    let nodoNuevo =
    `<article class="list-pokemons-item">
        <div class="list-pokemons-item-content">
          <img src= ${image} alt="pokemon-1"/>
            <h3>${nombre}<span>${varType}</span></h3>
         </div>
      </article>`;
      return nodoNuevo;
}

function insertNode(nodeInfo){
  let posicion = document.querySelector(".list-pokemons");
  posicion.innerHTML = nodeInfo;
}

function main(){
  let concatNodes = ``;
  let imagenPoke;
  let nombrePoke;
  let tipoPoke;
  let sizeArr;
  let i = 0;

  sizeArr = pokemons.length;
  console.log(pokemons);
  console.log(sizeArr);

  console.log(concatNodes);
  concatNodes = concatNodes + newNode('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',"bulbasaur1","water");
  console.log(concatNodes);
  concatNodes = concatNodes + newNode('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',"bulbasaur1","water");
  console.log(concatNodes);
}

main()

