





let url = "https://pokeapi.co/api/v"

const pokemonContainer = document.getElementById("pokemon-container")

fetch(url)
.then((response)=> response.json()) 
.then(data =>{

let pokemon = data.results

pokemon.forEach( (pokemon)=>{
    fetch(pokemon.url)
    .then((response)=>response.json())
    .then( pokemonData => {
        const pokemonElement = document.createElement("div")
        pokemonElement.innerHTML=`    
        <h2>${pokemonData.name}</h2>
        <img src="${pokemonData.sprites.back_default}">    
        `
        pokemonContainer.appendChild(pokemonElement)
    })
.catch(error=>{console.error("ha ocurrido un error al traer los pokemon")
});
});
})
.catch(error=>{console.error("la url esta mal, expoto todo al carajo")
})
