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

function listKeys(object) {
  const keysList = Object.keys(object);
  return keysList;
}

function objLength(object) {
  let keys = listKeys(object);
  return keys.length;
}

addShift(lesson2);
