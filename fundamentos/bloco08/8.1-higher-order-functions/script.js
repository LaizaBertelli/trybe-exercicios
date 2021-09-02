function generateEmail (name, lastName) {
  return `${name}_${lastName}@trybe.com`;
}

const newEmployees = () => {
  const employees = {
    id1: generateEmail('Pedro', 'Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: generateEmail('Luiza', 'Drumon'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: generateEmail('Carla', 'Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// console.log(newEmployees());

function random() {
  const min = 1;
  const max = 5;
  let rand =  Math.random() * (max - min) + min;
  return Math.round(rand);
}
function check(guess, func) {
  if(guess === func) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}

console.log(check(3, random()));
