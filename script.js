const menu = document.querySelectorAll("#casesButtons");
const frameboard = document.querySelector("#frameBoard");
const menuWhite = document.querySelector('.menuWhite')




function nominativo() {
    frameboard.setAttribute("src", "./Nominativo/nominativo.html");
    menuWhite.style.marginTop =  '0px'
    menu[0].style.backgroundColor = 'white';
    menu[0].style.color = '#7d7676';
}

function acusativo() {
  frameboard.setAttribute("src", "./Acusativo/acusativo.html");
  menuWhite.style.marginTop =  '110px'
  menu[1].style.backgroundColor = 'white';
  menu[1].style.color = '#7d7676';
}

function instrumental() {
  frameboard.setAttribute("src", "Instrumental/Instrumental.html");
  menuWhite.style.marginTop =  '220px'
  menu[2].style.backgroundColor = 'white';
  menu[2].style.color = '#7d7676';
}

function genitivo() {
  frameboard.setAttribute("src", "./Genitivo/Genitivo.html");
  menuWhite.style.marginTop =  '330px'
  menu[2].style.backgroundColor = 'white';
  menu[2].style.color = '#7d7676';
}

function dativo() {
  frameboard.setAttribute("src", "./Dativo/Dativo.html");
  menuWhite.style.marginTop =  '440px'
  menu[2].style.backgroundColor = 'white';
  menu[2].style.color = '#7d7676';
}

function locativo() {
  frameboard.setAttribute("src", "./Locativo/Locativo.html");
  menuWhite.style.marginTop =  '550px'
  menu[2].style.backgroundColor = 'white';
  menu[2].style.color = '#7d7676';
}

function vocativo() {
  frameboard.setAttribute("src", "./Vocativo/Vocativo.html");
  menuWhite.style.marginTop =  '660px'
  menu[2].style.backgroundColor = 'white';
  menu[2].style.color = '#7d7676';
}

menu[0].addEventListener("click", nominativo);
menu[1].addEventListener("click", acusativo);
menu[2].addEventListener("click", instrumental);
menu[3].addEventListener("click", genitivo);
menu[4].addEventListener("click", dativo);
menu[5].addEventListener("click", locativo);
menu[6].addEventListener("click", vocativo); 


