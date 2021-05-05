// variables
const urlParam  = window.location.search
const dificult = new URLSearchParams(urlParam).get("dif");
const circle = document.getElementById("circle")
const timer = document.getElementById("timer")
const score = document.getElementById("score")
let points = 1;
let circleSize = 1;
let timerSeconds = 30;
let setTimer;

// tamaños de pantalla
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;



////// Inicio del juego ///////

positionRandom(); // ubicacion random del circulo
circleTimer(); // tiempo en el que el circulo cambia de lugar

// Timer function
timerFunction = setInterval(function() { 
    if (timerSeconds <= 0) {
        clearInterval(timerFunction);
        location.replace("Credits.html?pts=" + score.innerHTML) //ir a los creditos con el score
    }
    timer.innerHTML= timerSeconds--;
}, 1000);

// // 


// evento click
circle.addEventListener("click", () => {
    changeCircleSize(); // cambiar tamaño del circulo  
    positionRandom(); // pocicion aleatoria
    addToScore(); // agregar puntos al scoreboard
    circleTimer(); // tiempo en el que tiene q cambiar de lugar 
});


// cambiar tamaño del circulo
function changeCircleSize() {
    circleSize = Math.floor(Math.random() * 3); // random del 0 al 2

    switch (circleSize) {
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
function positionRandom() {  
    circle.style.top = Math.random() * (windowHeight - 250) +"px";
    circle.style.bottom = Math.random() * (windowHeight - 300) +"px";
    circle.style.left = Math.random() * (windowWidth -200) + "px";
    circle.style.right = Math.random() * (windowWidth -200) + "px";
}


// sumar score
function addToScore() {
    points = points + circleSize + 1
    score.innerHTML = points;
}


// tiempo en el que el circulo cambia de lugar(dependiendo la dificultad)
function circleTimer() {
    clearTimeout(setTimer);

    if(dificult === 'hard') {
        setTimer = setTimeout(() => {
            positionRandom();
            changeCircleSize();
            circleTimer();
        }, 700);
    } else {
        setTimer = setTimeout(() => {
            positionRandom();
            changeCircleSize();
            circleTimer();
        }, 1000);
     }

}
    







