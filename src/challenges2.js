// Desafio 10
function techList(technology,name1) {
  let newlist
  if(!technology){
    return "Vazio!"
  } else{
    for(i = 0; i < technology.length; i + +1){
      newlist.push({tech: technology[i],name: name1})
    }
    newlist.sort(function(a,b){
      if(a.tech < b.tech) return -1;
      if(a.tech > b.tech) return 1;
      return 0;
    })
  }
}

// Desafio 11
function generatePhoneNumber(list) {
  let joker1
  let joker2
  let joker3
  let joker4
  let joker5
  let joker6
  let joker7
  let joker8
  let joker9
  let joker10
  let joker11
  if(list.length != 11){
    return "Array com tamanho incorreto."
  }
  for(i = 0; i < list.length; i + +1){
    if(list[i] < 0 || list[i] > 9){
      return "não é possível gerar um número de telefone com esses valores"
    } 
  }
  for(i = 0; i < list.length; i + +1){
    if(list[1] === list[i]){
      joker1 + +1
    } if(list[2] == list[i]){
      joker2 + +1
    } if(list[3] == list[i]){
      joker3 + +1
    } if(list[4] == list[i]){
      joker4 + +1
    } if(list[5] == list[i]){
      joker5 + +1
    } if(list[6] == list[i]){
      joker6 + +1
    } if(list[7] == list[i]){
      joker7 + +1
    } if(list[8] == list[i]){
      joker8 + +1
    } if(list[9] == list[i]){
      joker9 + +1
    } if(list[10] == list[i]){
      joker10 + +1
    } if(list[11] == list[i]){
      joker11 + +1
    }
  }
  if(joker1 >= 3 || joker2 >= 3 || joker3 >= 3 || joker4 >= 3 || joker5 >= 3 || joker6 >= 3 || joker7 >= 3 || joker8 >= 3 || joker9 >= 3 || joker10 >= 3 || joker11 >= 3){
    return "não é possível gerar um número de telefone com esses valores"
  }
  return ("(" + list[0] + list[1] + ") " + list[2] + list[3] + list[4] + list[5] + list[6] + "-" + list[7] + list[8] + list[9] + list[10])
}

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  if(lineA >= lineB + lineC){
    return false
  } else if(lineB >= lineA + lineC){
    return false
  } else if(lineC >= lineA + lineB){
    return false
  } else if(lineA <= Math.abs(lineB - lineC)){
    return false
  } else if(lineB <= Math.abs(lineA - lineC)){
    return false
  } else if(lineC <= Math.abs(lineA - lineB)){
    return false
  } else{
    return true
  }
}

// Desafio 13
function hydrate(str) {
  let sum = 0
  let numbers = str.match(/\d+/);
  for(i = 0; i < numbers.length; i + +1){
    sum += numbers[i]
  }
  return sum + "copos de água"
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
