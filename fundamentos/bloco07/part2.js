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
  return allLessons
}

addShift(lesson2);

function totalStudents () {
  let allLessons = groupObjects(lesson1, lesson2, lesson3);
  let students1 = allLessons.lesson1.numeroEstudantes;
  let students2 = allLessons.lesson2.numeroEstudantes;
  let students3 = allLessons.lesson3.numeroEstudantes;
  let total = students1 + students2 + students3;
  return total;
}

totalStudents();

function getValueByNumber(lesson, number) {
  let lessonKeys = Object.values(lesson);
  console.log(lessonKeys[number]);
  return lessonKeys[number];
}

function verifyPropertie(object, key, value) {
  const objectKeys = Object.keys(object);
  const objectValues = Object.values(object);
  for(let i = 0; i< objectKeys.length; i ++) {
    if(key === objectKeys[i] && value === objectValues[i]){
      return true;
    }
  }
  return false;
}

console.log(verifyPropertie(lesson3, 'materia', 'Maria Clara'));
