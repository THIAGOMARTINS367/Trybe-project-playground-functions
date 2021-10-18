// Desafio 1
function compareTrue(param1, param2) {
  let compare = param1 && param2;
  
  return compare;

}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;

}

// Desafio 3
function splitSentence(string) {
  let string1 = '';
  let arrayString = [];
  for (const iterator of string) {
    if (iterator !== ' ') {
      string1 = string1 + iterator;
    } else {
      arrayString.push(string1);
      string1 = '';
    }
  }
  arrayString.push(string1);

  return arrayString;

}

// Desafio 4
function concatName(array) {
  let lastAndFirst = [];

  lastAndFirst.push(array[array.length-1]);
  lastAndFirst.push(array[0]);

  return lastAndFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = wins * 3;
  points = points + (ties * 1);

  return points;

}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
