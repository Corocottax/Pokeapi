const burbuja = document.querySelector(".bubble");
let vecesBurbuja = 1;

burbuja.addEventListener("click", () => conversacion());

const conversacion = () => {

    console.log("Hola");

    if (vecesBurbuja === 1) {
        
        burbuja.innerHTML = "También puedes apuntar cosas en la agenda Pokemon, esta te ayudará en lo que necesites, no dudes en utilizarla!   <br/>  <span class='flechita'>🔻</span>";
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

