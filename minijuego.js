const divPrincipal = document.querySelector(".divPrincipal");
const urlSuelo = "./imgs/suelo.gif";
const urlDigglet = "./imgs/digglet.gif";
const botonJugar = document.querySelector(".botonJugar");

botonJugar.addEventListener("click", () => jugar());

for (let i = 0; i < 9; i++) {
    
    const suelo = document.createElement("img");

    suelo.setAttribute("src", urlSuelo);
    suelo.classList.add("suelos");

    if (suelo.className === "digglet") {
        
        

    }

    divPrincipal.appendChild(suelo);
    
}

const jugar = () => {

    const suelos = document.querySelectorAll(".suelos");

    let timeOut = 1000;

    let anterior = 0;

    for (let i = 29; i >= 0; i--) {

        let random = Math.floor(Math.random()*9);

        setTimeout(() => {

            const cambiarContador = document.querySelector(".contador");

            suelos[anterior].setAttribute("src", urlSuelo);

            suelos[random].setAttribute("src", urlDigglet);
            suelos[random].classList.add("digglet");
            anterior = random;
            
            if (i < 10) {

                cambiarContador.textContent = "00:0" + i;
                cambiarContador.style = "color: red";

            } else {

                cambiarContador.style = "color: white";
                cambiarContador.textContent = "00:" + i;

            }
            
        }, timeOut);

        timeOut += 1000;

        suelos[anterior].setAttribute("src", urlSuelo);
        
    }

}






