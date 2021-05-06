
const urlParam  = window.location.search;

const urlPoints = new URLSearchParams(urlParam).get("pts");

const points = ""+ urlPoints

document.getElementById("points").innerHTML = points;

