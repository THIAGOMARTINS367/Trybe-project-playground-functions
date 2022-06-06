// Desafio 1
function compareTrue(param1, param2) {
  let compare = param1 && param2;
  return compare;
}

console.log('-------------------------------------------------------------');
console.log('function ---> "compareTrue(param1, param2)"');
console.log('- Retornar "true" se ambos os valores forem verdadeiros');
console.log('- Retornar "false" se um ou ambos os parâmetros forem falsos.');
console.log('');
console.log('calling ---> compareTrue(false, false)');
console.log('Result:', compareTrue(false, false));
console.log('');
console.log('calling ---> compareTrue(true, true)');
console.log('Result:', compareTrue(true, true));
console.log('');
console.log('-------------------------------------------------------------');

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

console.log('function ---> "calcArea(base, height)"');
console.log('- Retorna o resultado do cálculo da área de um triângulo');
console.log('utilizando os valores passados nos parâmetros da função.');
console.log('');
console.log('calling ---> calcArea(4, 6)');
console.log('Result:', calcArea(4, 6));
console.log('');
console.log('-------------------------------------------------------------');

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

console.log('function ---> "splitSentence(string)"');
console.log('- Retorna um array de strings separadas por cada espaço na string original.');
console.log('');
console.log(`calling ---> splitSentence('go Trybe')`);
console.log('Result:', splitSentence('go Trybe'));
console.log('');
console.log('-------------------------------------------------------------');

// Desafio 4
function concatName(array) {
  let lastAndFirst = '';
  lastAndFirst = array[array.length - 1] + ', ' +  array[0];
  return lastAndFirst;
}

console.log('function ---> "concatName(array)"');
console.log(`- Retorna uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM'`);
console.log('ao receber uma array de strings, independente do tamanho do array.');
console.log('');
console.log(`calling ---> concatName(['captain', 'my', 'captain'])`);
console.log('Result:', concatName(['captain', 'my', 'captain']));
console.log('');
console.log('-------------------------------------------------------------');

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = wins * 3;
  points += (ties * 1);
  return points;
}

console.log('function ---> "footballPoints(wins, ties)"');
console.log(`- Retorna a quantidade de pontos que o time marcou em um campeonato.`);
console.log('- Para tanto, considerou-se que cada vitória vale 3 pontos e cada empate vale 1 ponto.');
console.log('');
console.log(`calling ---> footballPoints(14, 8)`);
console.log('Result:', footballPoints(14, 8));
console.log('');
console.log('-------------------------------------------------------------');

// Desafio 6
function highestCount(arrayOfNumbers) {
  let higherNumber = arrayOfNumbers[0];
  let higherRepetition = 0;
  let repetition = 0;
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

console.log('function ---> "highestCount(arrayOfNumbers)"');
console.log(`- Ao receber uma array de números no parâmetro,`);
console.log('retorna a quantidade de vezes que o maior deles se repete.');
console.log('');
console.log(`calling ---> highestCount([9, 1, 2, 3, 9, 5, 7])`);
console.log('Result:', highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log('');
console.log('-------------------------------------------------------------');

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let compareDistance = '';
  let distance1 = cat1 - mouse;
  let distance2 = cat2 - mouse;
  if (distance1 < 0) {
    distance1 *= -1;
  }
  if (distance2 < 0) {
    distance2 *= -1;
  }
  if (distance1 < distance2) {
    compareDistance = 'cat1';
  } else if (distance2 < distance1) {
    compareDistance = 'cat2';
  } else {
    compareDistance = 'os gatos trombam e o rato foge';
  }
  return compareDistance;
}

console.log('function ---> "catAndMouse(mouse, cat1, cat2)"');
console.log(`- Ao receber a posição de mouse, cat1 e cat2, nessa ordem,`);
console.log('calcula as distâncias entre o rato e cada um dos gatos,');
console.log('em seguida, retorna qual dos felinos irá alcançar o rato primeiro.');
console.log('');
console.log('- Caso os gatos estejam na mesma distância do rato,');
console.log('a função retornará a string "os gatos trombam e o rato foge".');
console.log('');
console.log(`calling ---> catAndMouse(1, 2, 3)`);
console.log('Result:', catAndMouse(1, 2, 3));
console.log('');
console.log(`calling ---> catAndMouse(1, 2, 2)`);
console.log('Result:', catAndMouse(1, 2, 2));
console.log('');
console.log('-------------------------------------------------------------');

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

console.log('function ---> "fizzBuzz(numbers)"');
console.log(`- Recebe um array de números e retorna um array da seguinte forma:`);
console.log('- Para cada número do Array que seja divisível apenas por 3, apresente uma string "fizz";');
console.log('- Para cada número do Array que seja divisível apenas por 5, apresente uma string "buzz";');
console.log('- Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";');
console.log('- Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";');
console.log('');
console.log(`calling ---> fizzBuzz([2, 15, 7, 9, 45])`);
console.log('Result:', fizzBuzz([2, 15, 7, 9, 45]));
console.log('');
console.log('-------------------------------------------------------------');

// Desafio 9
function encode(phraseOrWord) {
  let arrayEncode = [];
  let string = '';
  for (const iterator of phraseOrWord) {
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
  for (const iterator2 of arrayEncode) {
    string += iterator2;
  }
  return string;
}

function decode(phraseOrWordEncoding) {
  let arrayDecode = [];
  let string = '';
  for (const iterator of phraseOrWordEncoding) {
    if (iterator === '1') {
      arrayDecode.push('a');
    } else if (iterator === '2') {
      arrayDecode.push('e');
    } else if (iterator === '3') {
      arrayDecode.push('i');
    } else if (iterator === '4') {
      arrayDecode.push('o');
    } else if (iterator === '5') {
      arrayDecode.push('u');
    } else {
      arrayDecode.push(iterator);
    }
  }
  for (const iterator2 of arrayDecode) {
    string += iterator2;
  }
  return string;
}

console.log('function ---> "encode(phraseOrWord) e decode(phraseOrWordEncoding)"');
console.log('- encode(phraseOrWord): Ao receber uma string como parâmetro, deverá trocar todas');
console.log('as vogais minúsculas por números, de acordo com o formato a seguir:');
console.log(`
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5`);
console.log('');
console.log('- decode(phraseOrWordEncoding): Recebe uma string contendo números');
console.log('no lugar de letras minúsculas e retorna uma string com');
console.log('vogais minúsculas no lugar dos números.');
console.log('');
console.log(`calling ---> encode('hi there!')`);
console.log('Result:', encode('hi there!'));
console.log('');
console.log(`calling ---> decode('h3 th2r2!')`);
console.log('Result:', decode(encode('hi there!')));
console.log('');
console.log('-------------------------------------------------------------');

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
