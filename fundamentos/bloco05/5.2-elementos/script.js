var body = document.body;

//cria uma tag h1 contendo um título
let title = document.createElement('h1');
title.innerText = 'Exercício 5.2 - JavaScript DOM'
body.appendChild(title);

//cria uma tag main
let main = document.createElement('main');
main.classList.add("main-content");
body.appendChild(main);