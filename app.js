// variables
const circulo = document.getElementById("circulo")
const timer = document.getElementById("cronometro")

let cronometroSeconds = 30;

// tamaños de pantalla
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;



// evento click
circulo.addEventListener("click", posicionRandom);


// ubicacion random del circulo
function posicionRandom() {  
    circulo.style.top = Math.random() * (windowHeight - 200) +"px";
    circulo.style.left = Math.random() * (windowHeight - 300) + "px";
}


// cronometro function
const cronometroFunction = setInterval(function() {
    if (cronometroSeconds <= 0) {
        clearInterval(cronometroFunction); // freno funcion
    }
    timer.innerHTML = cronometroSeconds--;
}, 1000);

