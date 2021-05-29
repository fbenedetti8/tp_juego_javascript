const dificultForm = document.getElementsByName("dificultForm");
const dificult = document.getElementById("dificult");
const start = document.getElementById("start");
let dificultSelected = "easy";

dificult.addEventListener("click", () => {
  dificultForm.forEach((dif) => {
    if (dif.checked) {
      dificultSelected = dif.id;
    }
  });
});

start.addEventListener("click", () => {
  // Template literal:
  // `game.html?dif=${dificultSelected}`
  location.replace("game.html?dif=" + dificultSelected);
});
