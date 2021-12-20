const divPrincipal = document.querySelector(".divPrincipal");
const urlSuelo = "./imgs/suelo.gif";

for (let i = 0; i < 9; i++) {
    
    const suelo = document.createElement("img");

    suelo.setAttribute("src", urlSuelo);
    suelo.classList.add("suelos");

    divPrincipal.appendChild(suelo);
    
}






