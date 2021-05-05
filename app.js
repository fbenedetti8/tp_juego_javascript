// variables
const urlParam  = window.location.search
let urlDif = new URLSearchParams(urlParam).get("dif");
const circle = document.getElementById("circle")
const timer = document.getElementById("timer")
const score = document.getElementById("score")
let points = 1;
let circleSize = 1;
let timerSeconds = 30;

// tamaños de pantalla
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;



// if() {circletimer}


////// Inicio del juego ///////


posicionRandom(); // ubicacion random del circulo

// Timer function
timerFunction = setInterval(function() { 
    if (timerSeconds <= 0) {
        clearInterval(timerFunction);
    }
    timer.innerHTML = timerSeconds--;
}, 1000);

// // 



// evento click
circle.addEventListener("click", () => {
    changeCircleSize();
    posicionRandom();
    addToScore();
});


// cambiar tamaño del circulo
function changeCircleSize() {
    // setInterval(() => {
        
    // }, circletimer)
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
function posicionRandom() {  
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








