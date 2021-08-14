var body = document.body;
var text = [
  'Exercício 5.2 - JavaScript DOM',
  'Algum texto',
]
var imageSrc = 'https://picsum.photos/200'
var listItems = [
  'um',
  'dois',
  'três',
  'quatro',
  'cinco',
  'seis',
  'sete',
  'oito',
  'nove',
  'dez'
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
centerSection.classList.add("center-content");
main.appendChild(centerSection);

//adiciona um parágrafo a centerSection
let p = document.createElement('p');
p.innerText = text[1];
centerSection.appendChild(p);

//Adiciona uma section à esquerda
let leftSection = document.createElement('section');
leftSection.classList.add("left-content");
main.appendChild(leftSection);

//Adiciona uma section à direita
let rightSection  = document.createElement('section');
rightSection.classList.add("right-content");
main.appendChild(rightSection);

//Adiciona uma imagem à leftSection
let image = document.createElement('img');
image.classList.add("small-image");
image.src = imageSrc;

leftSection.appendChild(image);

//Adiciona lista não ordenada
let ul = document.createElement('ul');
rightSection.appendChild(ul);

let list = [];
for(let i = 0; i < listItems.length; i++){
  list[i] = document.createElement('li');
  list[i].innerText = listItems[i];
  ul.appendChild(list[i]);
}

//adiciona tags h3
let h3 = [];
for(let i = 0; i < 3; i ++){
  h3[i] = document.createElement('h3');
  main.appendChild(h3[i]);
}

//Adiciona classe title à h1
title.classList.add("title");

//Adiciona classe description à h3
for(let i =0; i < 3; i ++){
  h3[i].classList.add("description");
}

//Centraliza rightCenter
rightSection.style.marginRight = "auto";

//Troca cor de fundo de main;
centerSection.parentElement.style.backgroundColor = 'green';