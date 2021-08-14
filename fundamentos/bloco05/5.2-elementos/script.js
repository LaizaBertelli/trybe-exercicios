var body = document.body;
var text = [
  'Exercício 5.2 - JavaScript DOM',
  'Algum texto'
]

//cria uma tag h1 contendo um título
let title = document.createElement('h1');
title.innerText = text[0];
body.appendChild(title);

//cria uma tag main
let main = document.createElement('main');
main.classList.add("main-content");
body.appendChild(main);

// adiciona uma section central
let centerSection = document.createElement('section');
section.classList.add("center-content");
main.appendChild(centerSection);
