const soma = (array) => array.reduce((acc, curr) => acc = acc + curr);

const promiese = new Promise((resolve, reject) => {
  const min = 1;
  const max = 50;
  const randomNumbers = [];
  for (let i = 0; i < 10; i += 1) {
    const random = Math.random() * (max - min) + min;
    randomNumbers.push(Math.floor(random) ** 2);
  }
  if(soma(randomNumbers) < 8000) {
    return reject('É mais de oito mil! Essa promise deve estar quebrada!');
  }
  resolve(randomNumbers);
})
  .then(div => [2, 3, 5, 10].map(number => div / number))
  .then(array => soma(array))
  .catch(err => console.log(err));