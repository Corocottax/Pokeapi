const burbuja = document.querySelector(".bubble");
let vecesBurbuja = 1;
let vecesPokeball = 0;
let imagen = "";
let onlyOneTime = 0;

burbuja.addEventListener("click", () => conversacion());

const conversacion = () => {

    if (vecesBurbuja === 1) {
        
        burbuja.innerHTML = "También puedes apuntar cosas en la <b>POKEAGENDA</b>, esta te ayudará en lo que necesites, no dudes en utilizarla!   <br/>  <span class='flechita'>🔻</span>";
        vecesBurbuja++;
    
    } else if (vecesBurbuja === 2) {
        
        burbuja.innerHTML = "Que más quieres, eso es todo, ya puedes marcharte a cazar Pokemons niñato.   <br/><br/>  <span class='flechita'>🔻</span>";
        vecesBurbuja++;
    
    } else if (vecesBurbuja === 3) {
        
        burbuja.innerHTML = "Como me sigas molestando voy a mandar a 3 rattatas a por ti bobo, marcha antes de que sea demasiado tarde.   <br/>  <span class='flechita'>🔻</span>";
        vecesBurbuja++;
    
    } else if (vecesBurbuja === 4) {
        
        burbuja.innerHTML = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA QUE PESAO TIOOOOOOOOOOOOOOOOOOOOOOOOOOO.   <br/><br/>  <span class='flechita'>🔻</span>";
        vecesBurbuja++;
    
    } else if (vecesBurbuja === 5) {
        
        burbuja.innerHTML = "Aguantar a esta gente no está pagado.   <br/><br/><br/>  <span class='flechita'>🔻</span>";
        vecesBurbuja++;
    
    } else if (vecesBurbuja === 6) {
        
        burbuja.innerHTML = "'El profesor OAK te pega tal paliza que acabas en urgencias, no debiste molestarle.' ☠";
        vecesBurbuja++;
    
    }

}


const pokeball = document.querySelector(".pokebola");

pokeball.addEventListener("click", () => generarPokemonAleatorio());

const generarPokemonAleatorio = () => {

    vecesPokeball++;

    if (vecesPokeball < 3) {
        
        pokeball.style = ("transform: rotate(30deg); -webkit-transition: width 0.2s; transition: 0.2s;");

        setTimeout(() => {
            
            pokeball.style = ("transform: rotate(-30deg); -webkit-transition: width 0.2s; transition: 0.2s;");
    
        }, 200);
    
        setTimeout(() => {
            
            pokeball.style = ("transform: rotate(30deg); -webkit-transition: width 0.2s; transition: 0.2s;");
    
        }, 400);
    
        setTimeout(() => {
            
            pokeball.style = ("transform: rotate(-30deg); -webkit-transition: width 0.2s; transition: 0.2s;");
    
        }, 600);
    
        setTimeout(() => {
            
            pokeball.style = ("transform: rotate(30deg); -webkit-transition: width 0.2s; transition: 0.2s;");
    
        }, 800);
    
        setTimeout(() => {
            
            pokeball.style = ("transform: rotate(-30deg); -webkit-transition: width 0.2s; transition: 0.2s;");
    
        }, 1000);
    
        setTimeout(() => {
            
            pokeball.style = ("transform: rotate(0deg); -webkit-transition: width 0.2s; transition: 0.2s;");
    
        }, 1000);

    } else {

        let random = Math.floor(Math.random()*151);

        fetch("https://pokeapi.co/api/v2/pokemon/?limit=151").then((res) => res.json())
        .then((myRes) => { 

            const pokemons = myRes.results;

            for (let i = 0; i < pokemons.length; i++) {

                let pokemon = pokemons[i];
        
                fetch(`${pokemon.url}`).then((res) => res.json())
                .then((myRes) => {

                    console.log("r " + random);
                    console.log("i " + i);

                    if (i === random) {

                        console.log("COINCIDO");

                        imagen = myRes.sprites.other.dream_world.front_default;

                    }

                });

            }

        });

        setTimeout(() => {

            if (onlyOneTime === 0) {
                
                console.log(imagen);        

                pokeball.setAttribute("src", imagen);

                onlyOneTime++;

            }
            
            
        }, 1000);

    }

}
