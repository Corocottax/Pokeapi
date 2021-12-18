const nombres = [];
const iconosTipos = ["bug", "dark", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"];

fetch("https://pokeapi.co/api/v2/pokemon/?limit=151").then((res) => res.json())
.then((myRes) => {

    const pokemons = myRes.results;
    extraerNombres(pokemons);
    
    pintarTodasLasCartas(pokemons);


});

const extraerNombres = (pokemons) => {

    for (const pokemon of pokemons) {

        nombres.push(pokemon.name);

    }

};

const pintarTodasLasCartas = (pokemons) => {

    const divPrincipal$$ = document.createElement("div");

    divPrincipal$$.classList.add("album");

    for (const pokemon of pokemons) {
        
        fetch(`${pokemon.url}`).then((res) => res.json())
        .then((myRes) => {               
                
                let id = myRes.id;
                let nombre = myRes.name;
                let altura = myRes.height/10;
                let peso = Math.round(myRes.weight/10 * 100) / 100;
                let imagen = myRes.sprites.other.dream_world.front_default;

                const div$$ = document.createElement("div");
                const divStats$$ = document.createElement("div");
                const id$$ = document.createElement("h3");
                const nombre$$ = document.createElement("h1");
                const altura$$ = document.createElement("p");
                const peso$$ = document.createElement("p");
                const imagen$$ = document.createElement("img");

                imprimirTipos(myRes);

                div$$.classList.add("carta");

                id$$.textContent = (id);
                nombre$$.textContent = (nombre);
                altura$$.textContent = (altura + " m");
                peso$$.textContent = (peso + " Kg");
                imagen$$.setAttribute("src", imagen);

                imagen$$.classList.add("imagenes");
                divStats$$.classList.add("stats");

                divStats$$.appendChild(altura$$);
                divStats$$.appendChild(peso$$);
                div$$.appendChild(id$$);
                div$$.appendChild(nombre$$);
                div$$.appendChild(imagen$$);
                div$$.appendChild(divStats$$);
                divPrincipal$$.appendChild(div$$);
                
            });

    }

    document.body.appendChild(divPrincipal$$);

};

const imprimirTipos = (pokemon) => {

    for (const tipo of iconosTipos) {
        console.log(tipo);
        //divStats$$.appendChild();

    }

}