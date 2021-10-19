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

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
