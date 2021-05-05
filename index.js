
const dificultForm = document.getElementsByName("dificultForm");
const dificult = document.getElementById("dificult");
const start = document.getElementById("start");
let dificultSelected = 'easy';


dificult.addEventListener("click", () => {
    dificultForm.forEach(dif => {
        if(dif.checked) {
            dificultSelected = dif.id;
        }
    });
})


start.addEventListener("click", () => {
    location.replace("game.html?dif=" + dificultSelected)
})

