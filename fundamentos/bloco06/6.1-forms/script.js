// Dados pessoais do usuário
const userNameInput = document.getElementById('user-name');
const userEmailInput = document.getElementById('user-email');
const userCPFInput = document.getElementById('user-cpf');
const userAddressInput = document.getElementById('user-address');
const userCityInput = document.getElementById('user-city');
const house = document.getElementById('radio-address-house');
const apartment = document.getElementById('radio-address-apartment');
const addresType = document.getElementById('radio-buttons');

//general elements
const body = document.body;
const answers = document.getElementById('answers');
const ulUserData = document.getElementById('user-data');
const ulJobData = document.getElementById('last-job');
const stateOptions = document.getElementById('state-options');

//dados do último emprego;
const curriculumInput = document.getElementById('curriculum');
const jobInput = document.getElementById('job');
const jobDescriptionInput = document.getElementById('job-description');
const startDateInput = document.getElementById('start-date');

//lista com todos os estados do Brasil
let statesList = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
  'Distrito Federal'
]
function prevent(event) {
  const preventEvent = event;
  preventEvent.preventDefault();
}

function createUserInfos(userInfos) {
  for(let key in userInfos){
    userInfos.key;
    let li = document.createElement('li');
    li.innerText = userInfos[key];
    ulUserData.appendChild(li);
    console.log(userInfos[key]);
  }
  let radioLi = document.createElement('li');
  let checked = '';
  if(house.hasAttribute('checked')){
    checked = 'Casa';
  }
  if(apartment.hasAttribute('checked')){
    checked = 'Apartamento';
  }
  radioLi.innerText = checked;
  ulUserData.appendChild(radioLi);
 }

function createLastJobInfos (lastJob){
  for(let key in lastJob) {
    let li = document.createElement('li');
    li.innerText = lastJob[key];
    ulJobData.appendChild(li);
  }
}

function getUserValues() {
  let userData = {
    name: userNameInput.value,
    email: userEmailInput.value,
    cpf: userCPFInput.value,
    addres: userAddressInput.value,
    city: userCityInput.value,
  };
  console.log(userData);
  createUserInfos(userData);
}

function getLastJobValues() {
  let jobData = {
    curriculum: curriculumInput.value,
    job: jobInput.value,
    jobDescription: jobDescriptionInput.value,
    startDate: startDateInput.value,
  };
  console.log(jobData);
  createLastJobInfos(jobData);
}

function check (event) {
  let radioEvent = event.target;
  if(radioEvent === house){
    house.setAttribute('checked', '');
    apartment.removeAttribute('checked', '');
  } else {
    house.removeAttribute('checked', '');
    apartment.setAttribute('checked', '');
  }
}

function addEvent() {
  const preventButton = document.querySelector('.submit-button');
  preventButton.addEventListener('click', prevent);
  preventButton.addEventListener('click', getUserValues);
  preventButton.addEventListener('click', getLastJobValues);
  house.addEventListener('click', check);
  apartment.addEventListener('click', check);
}

addEvent();

function addOptions() {
  for(let key of statesList) {
    let opt = document.createElement('option');
    opt.innerText = key;
    stateOptions.appendChild(opt);
  }
}
addOptions();

/* O que está faltando?
 
 Fazer verificações em cada valor
 criar um alert se os dados não forem válidos
 Colocar valores de acordo com o estado no options
 pegar resultado do options

 getAttribute() e setAttribute();
 */
