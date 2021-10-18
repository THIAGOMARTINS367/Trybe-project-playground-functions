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
      string1 += iterator;
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
  lastAndFirst.push(array[array.length - 1]);
  lastAndFirst.push(array[0]);
  return lastAndFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = wins * 3;
  points += (ties * 1);
  return points;
}

let higherNumber = 0;
let higherRepetition = 0;
let exportIterator = 0;

function highestCountAssistant(arrayOfNumbers2) {
  for (const iterator of arrayOfNumbers2) {
    let repetition = 0;
    exportIterator = iterator;
    for (const iterator2 of arrayOfNumbers2) {
      if (iterator2 === iterator) {
        repetition += 1;
      }
    }
  }
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  highestCountAssistant(arrayOfNumbers);
  if (exportIterator >= higherNumber) {
    higherNumber =  exportIterator;
    higherRepetition = repetition;
  }
  return higherRepetition;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let compareDistance = '';
  if (cat1 < cat2) {
    compareDistance = 'cat1';
  } else if (cat2 < cat1) {
    compareDistance = 'cat2';
  } else {
    compareDistance = 'os gatos trombam e o rato foge';
  }
  return compareDistance;
}

let arrayResult = [];
function fizzBuzzAssistant(iterator) {
  if (iterator % 3 === 0 && iterator % 5 === 0) {
    arrayResult.push('fizzBuzz');
  } else if (iterator % 3 === 0) {
    arrayResult.push('fizz');
  } else if (iterator % 5 === 0) {
    arrayResult.push('buzz');
  } else {
    arrayResult.push('bug!');
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  for (const iterator of numbers) {
    fizzBuzzAssistant(iterator);
  }
  return arrayResult;
}

let arrayEncode = [];
function encodeAssistant(iterator) {
  if (iterator === 'a') {
    arrayEncode.push(1);
  } else if (iterator === 'e') {
    arrayEncode.push(2);
  } else if (iterator === 'i') {
    arrayEncode.push(3);
  } else if (iterator === 'o') {
    arrayEncode.push(4);
  } else if (iterator === 'u') {
    arrayEncode.push(5);
  } else {
    arrayEncode.push(iterator);
  }
}

// Desafio 9
function encode(phraseOrWord) {
  let string = '';
  for (const iterator of phraseOrWord) {
    encodeAssistant(iterator);
  }
  for (const iterator2 of arrayEncode) {
    string += iterator2;
  }
  return string;
}

let arrayDecode = [];
function decodeAssistant(iterator) {
  if (iterator === '1') {
    arrayEncode.push('a');
  } else if (iterator === '2') {
    arrayEncode.push('e');
  } else if (iterator === '3') {
    arrayEncode.push('i');
  } else if (iterator === '4') {
    arrayEncode.push('o');
  } else if (iterator === '5') {
    arrayEncode.push('u');
  } else {
    arrayEncode.push(iterator);
  }
}

function decode(phraseOrWordEncoding) {
  let string = '';
  for (const iterator of phraseOrWordEncoding) {
    decodeAssistant(iterator);
  }
  for (const iterator2 of arrayDecode) {
    string += iterator2;
  }
  return string;
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
