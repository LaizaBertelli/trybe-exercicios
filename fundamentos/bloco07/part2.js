const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addShift(lesson2) {
  lesson2.turno = 'manhã';
}

addShift(lesson2);

function listKeys(object) {
  const keysList = Object.keys(object);
  return keysList;
}

function objLength(object) {
  let keys = listKeys(object);
  return keys.length;
}

function objValues(object) {
  let valueList = Object.values(object);
  return valueList;
}

function groupObjects(lesson1, lesson2, lesson3) {
  let allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  console.log(allLessons);
}
groupObjects(lesson1, lesson2, lesson3);

addShift(lesson2);
