const menu = document.querySelectorAll("#casesButtons");
const frameboard = document.querySelector("#frameBoard");
const menuWhite = document.querySelector(".menuWhite");

// Função Construtora

function SelectMenu(link, altura) {
  this.selecionar = function () {
    frameboard.setAttribute("src", link);
    menuWhite.style.marginTop = altura;
  };
}

// Novas funções criadas a partir da função construtora

const nominativo = new SelectMenu("./Nominativo/nominativo.html", "0px");
const acusativo = new SelectMenu("./Acusativo/acusativo.html", "110px");
const instrumental = new SelectMenu("./Instrumental/Instrumental.html","220px");
const genitivo = new SelectMenu("./Genitivo/Genitivo.html", "330px");
const dativo = new SelectMenu("./Dativo/Dativo.html", "440px");
const locativo = new SelectMenu("./Locativo/Locativo.html", "550px");
const vocativo = new SelectMenu("./Vocativo/Vocativo.html", "660px");

//Eventos de click

menu[0].addEventListener("click", nominativo.selecionar);
menu[1].addEventListener("click", acusativo.selecionar);
menu[2].addEventListener("click", instrumental.selecionar);
menu[3].addEventListener("click", genitivo.selecionar);
menu[4].addEventListener("click", dativo.selecionar);
menu[5].addEventListener("click", locativo.selecionar);
menu[6].addEventListener("click", vocativo.selecionar);
