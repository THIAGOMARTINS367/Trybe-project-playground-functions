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

// Desafio 6
function highestCount(arrayOfNumbers) {
  let repetition = 0;
  let higherNumber = 0;
  let higherRepetition = 0;
  for (const iterator of arrayOfNumbers) {
    for (const iterator2 of arrayOfNumbers) {
      if (iterator2 === iterator) {
        repetition += 1;
      }
    }
    if (iterator >= higherNumber) {
      higherNumber = iterator;
      higherRepetition = repetition;
    }
    repetition = 0;
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

// Desafio 8
function fizzBuzz(numbers) {
  let arrayResult = [];
  for (const iterator of numbers) {
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
  return arrayResult;
}

// Desafio 9
function encode(phraseOrWord) {
  let arrayEncode = [];
  let string = '';
  for (const iterator of phraseOrWord) {
    switch (iterator) {
      case 'a':
        arrayEncode.push(1);
        break;
      case 'e':
        arrayEncode.push(2);
        break;
      case 'i':
        arrayEncode.push(3);
        break;
      case 'o':
        arrayEncode.push(4);
        break;
      case 'u':
        arrayEncode.push(5);
        break;
      default:
        arrayEncode.push(iterator);
        break;
    }
  }
  for (const iterator2 of arrayEncode) {
    string += iterator2;
  }
  return string;
}

function decode(phraseOrWordEncoding) {
  let arrayDecode = [];
  let string = '';
  for (const iterator of phraseOrWordEncoding) {
    switch (iterator) {
      case '1':
        arrayDecode.push('a');
        break;
      case '2':
        arrayDecode.push('e');
        break;
      case '3':
        arrayDecode.push('i');
        break;
      case '4':
        arrayDecode.push('o');
        break;
      case '5':
        arrayDecode.push('u');
        break;
      default:
        arrayDecode.push(iterator);
        break;
    }
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
