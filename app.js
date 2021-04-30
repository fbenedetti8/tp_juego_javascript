// variables
const circle = document.getElementById("circle")
const timer = document.getElementById("timer")
const score = document.getElementById("score")
let timerSeconds = 30;
let points = 1;
let circuleSize = 1;

// tamaños de pantalla
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;



// Inicio del juego //

posicionRandom()

timerFunction = setInterval(function() { // Timer function
    if (timerSeconds <= 0) {
        clearInterval(timerFunction); // freno funcion
    }
    timer.innerHTML = timerSeconds--;
}, 1000);

// // 



// evento click
circle.addEventListener("click", () => {
    changeCirculeSize();
    posicionRandom();
    addScore();
});


// cambiar tamaño del circulo
function changeCirculeSize() {
    circuleSize = Math.floor(Math.random() * 3); // random del 0 al 2
    console.log(circuleSize)
    switch (circuleSize) {
        case 2:
            circle.style.height = "10vh";
            circle.style.width = "10vh";
            break;
        case 1: 
            circle.style.height = "14vh";
            circle.style.width = "14vh";
        case 0:
            circle.style.height = "20vh";
            circle.style.width = "20vh";
            break;
    }
}


// ubicacion random del circulo
function posicionRandom() {  
    circle.style.top = Math.random() * (windowHeight - 250) +"px";
    circle.style.bottom = Math.random() * (windowHeight - 300) +"px";
    circle.style.left = Math.random() * (windowWidth -200) + "px";
    circle.style.right = Math.random() * (windowWidth -200) + "px";
}


// sumar score
function addScore() {
    points = points + circuleSize + 1
    score.innerHTML = points;
}








