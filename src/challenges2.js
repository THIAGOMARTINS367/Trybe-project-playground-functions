// Desafio 10
function techList(tech, name) {
  let array = [];
  array = tech.sort();
  let array2 = [];
  let error = '';
  let orderedList = {
  
  }
  if (array.length == 0) {
    error = 'Vazio!'
    return error;
  } else {
    for (const key in array) {
      orderedList['tech'] = array[key];
      orderedList['name'] = name;
      array2.push(orderedList);
      orderedList = {}
    }
    return array2;
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  let phoneNumber = '';
  phoneNumber = '(' + array[0] + array[1] + ') ';
  let array2 = array;
  let error = '';

  if (array.length !== 11) {
    error = 'Array com tamanho incorreto.';
    return error;

  }
  if (error === '') {
    let counter = 0;
    for (const iterator of array) {
      for (const iterator2 of array) {
        if (iterator2 === iterator) {
          counter += 1;
        }
      }
      if (counter >= 3) {
        error = 'não é possível gerar um número de telefone com esses valores';
        return error;
      }
      counter = 0
    }

  }
  if (error === '') {
    for (const iterator3 of array) {
      if (iterator3 < 0 || iterator3 > 9) {
        error = 'não é possível gerar um número de telefone com esses valores';
      }
    }
    if (error !== '') {
      return error;
    }
  }
  if (error === '') {
    array2.shift()
    array2.shift()

    for (let index = 0; index < 5; index++) {
      phoneNumber += array2[index];

    }

    for (let index = 0; index < 5; index++) {
      array2.shift()
    }
    phoneNumber += '-'

    for (const key in array2) {
      phoneNumber += array2[key];
    }
    return phoneNumber;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let differenceAB = Math.abs(lineA - lineB);
  let differenceAC = Math.abs(lineA - lineC);
  let differenceBC = Math.abs(lineB - lineC);
  let result = false;

  if (lineA < lineB + lineC && lineA > differenceAB && lineA > differenceAC && lineA > differenceBC) {
    result = true;

  } else  if (lineB < lineA + lineC && lineB > differenceAB && lineB > differenceAC && lineB > differenceBC) {
    result = true;

  } else  if (lineC < lineA + lineB && lineC > differenceAB && lineC > differenceAC && lineC > differenceBC) {
    result = true;

  }

  return result
}

// Desafio 13
function hydrate(string) {
  let glassesOfWater = 0;
  let resultString = ''
  for (const iterator of string) {
    if (iterator == '1' || iterator == '2' || iterator == '3' || iterator == '4' || iterator == '5' || iterator == '6' || iterator == '7' || iterator == '8' || iterator == '9') {
      glassesOfWater += parseInt(iterator);
    }
  }
  if (glassesOfWater == 1) {
    resultString = glassesOfWater + ' copo de água'
  } else {
    resultString = glassesOfWater + ' copos de água'
  }

  return resultString
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'))

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
}
