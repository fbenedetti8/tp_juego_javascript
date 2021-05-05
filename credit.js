
const urlParam  = window.location.search;

const urlPoints = new URLSearchParams(urlParam).get("pts");

const points = document.getElementById("points");

points.innerHTML = points;
