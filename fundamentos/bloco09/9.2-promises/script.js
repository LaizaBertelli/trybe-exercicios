// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
let getJoke = document.getElementsByClassName('get-joke');
getJoke = document.addEventListener('click', getAnotherJoke);

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: {'Accept': 'application/json'}
  };
  const p = document.createElement('p');
  const jokeContainer = document.getElementById('jokeContainer');

  //get dad joke when page loads
  fetch('https://icanhazdadjoke.com/', myObject)
    .then(response => response.json())
    .then(data => {
      p.innerText = data.joke;
      jokeContainer.appendChild(p);
    });
};

function getAnotherJoke() {
  const p = document.querySelectorAll('p');
  for (let i = 0; i < p.length; i ++) {
    p[i].remove();
  }
  fetchJoke();
}

window.onload = () => fetchJoke();