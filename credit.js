const urlParam = window.location.search;

const urlPoints = new URLSearchParams(urlParam).get("pts");

// ¿Por qué no -> const points = urlPoints y ya?
const points = "" + urlPoints;

document.getElementById("points").innerHTML = points;
