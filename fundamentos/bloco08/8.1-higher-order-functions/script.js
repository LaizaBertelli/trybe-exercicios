// Exercício 1
function generateEmail (name) {
  const completeName = name.split(' ');
  const email = `${completeName.join('_')}@trybe.com`;
  const userInfos = {
    completeName: completeName,
    email: email,
  };
  return userInfos;
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Laiza Bertelli'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumon'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(generateEmail));

// Exercício 2
function random() {
  const min = 1;
  const max = 5;
  let rand =  Math.random() * (max - min) + min;
  return Math.round(rand);
}
function check(guess, callback) {
  return guess === callback ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(check(3, random));

// Exercício 2
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function checkTest(template, answer){
  if(answer === 'N.A') {
    return 0;
  }
 return template === answer ? 1 : 0.5;
};

function fixTests(template, answers, callback) {
  let count = 0;
  for (let i = 0; i < template.length; i += 1) {
    count = count + callback(template[i], answers[i]);
  }
  return count;
}

console.log(fixTests(RIGHT_ANSWERS, STUDENT_ANSWERS, checkTest));
