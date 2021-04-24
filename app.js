const circulo = document.getElementById("circulo")

// tamaños de pantalla
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


// configuracion inicial del juego
function start () {
    setTimeout(myFunction, 3000);
}


// evento click
circulo.addEventListener("click", posicionRandom);


// ubicacion random
function posicionRandom() {  
    circulo.style.top = Math.random() * (windowHeight - 200) +"px";
    circulo.style.left = Math.random() * (windowHeight - 300) + "px";
}

