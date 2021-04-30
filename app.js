// variables
const circulo = document.getElementById("circulo")
const timer = document.getElementById("timer")
const score = document.getElementById("score")
let timerSeconds = 30;
let points = 1;

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
    posicionRandom();
    addScore();
});


// ubicacion random del circulo
function posicionRandom() {  
    circle.style.top = Math.random() * (windowHeight - 250) +"px";
    circle.style.bottom  = Math.random() * (windowHeight - 250) +"px";
    circle.style.left = Math.random() * (windowWidth -200) + "px";
    circle.style.right = Math.random() * (windowWidth -200) + "px";
}


// sumar score
function addScore() {
    console.log(score.innerHTML)
    score.innerHTML = points++;
}








