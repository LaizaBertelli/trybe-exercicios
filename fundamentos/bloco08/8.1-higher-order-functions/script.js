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

// function random() {
//   const min = 1;
//   const max = 5;
//   let rand =  Math.random() * (max - min) + min;
//   return Math.round(rand);
// }
// function check(guess, func) {
//   if(guess === func) {
//     return 'Parabéns você ganhou';
//   }
//   return 'Tente novamente';
// }

// // console.log(check(3, random()));

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


