const menu = document.querySelectorAll("#casesButtons");
const frameboard = document.querySelector("#frameBoard");

function nominativo() {
  frameboard.setAttribute("src", "Nominativo/nominativo.html");
}

function acusativo() {
  frameboard.setAttribute("src", "Acusativo/acusativo.html");
}

function instrumental() {
  frameboard.setAttribute("src", "Instrumental/instrumental.html");
}

function genitivo() {
  frameboard.setAttribute("src", "Genitivo/genitivo.html");
}

function dativo() {
  frameboard.setAttribute("src", "Dativo/dativo.html");
}

function locativo() {
  frameboard.setAttribute("src", "Locativo/locativo.html");
}

function vocativo() {
  frameboard.setAttribute("src", "Vocativo/vocativo.html");
}

menu[0].addEventListener("click", nominativo);
menu[1].addEventListener("click", acusativo);
menu[2].addEventListener("click", instrumental);
menu[3].addEventListener("click", genitivo);
menu[4].addEventListener("click", dativo);
menu[5].addEventListener("click", locativo);
menu[6].addEventListener("click", vocativo);
