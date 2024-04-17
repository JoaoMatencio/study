// Desafio 1
function compareTrue(value1,value2) {
  return value1 && value2
}

// Desafio 2
function calcArea(base,height) {
  return (base*height)/2
}

// Desafio 3
function splitSentence(str) {
  return str.split(" ")
}

// Desafio 4
function concatName(list) {
  const lastposition = list.length - 1
  return (list[lastposition] + ", " + list[0]) 
}

// Desafio 5
function footballPoints(wins,ties) {
  return wins*3 + ties
}

// Desafio 6
function highestCount(list) {
  let bigger = 0
  let countbigger = 0
  for(let i = 0; i < list.length; i + +1){
    if (bigger < list[i]){
      bigger = list[i]
    }
    }
    for(let i = 0; i < list.length; i + +1){
      if (bigger === list[i]){
        coutbigger + +1
      }
    }
    return countbigger
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let searchresult
  if(cat1 - mouse === cat2 - mouse){
    searchresult = "os gatos trombam e o rato foge"
  } else if(cat1 - mouse > cat2 - mouse){
    searchresult = "cat1"
  } else{
    searchresult = "cat2"
  }
  return searchresult
}

// Desafio 8
function fizzBuzz(list) {
  let newlist
  for(let i = 0; i < list.length; i + +1){
    if(list[i]%3 === 0){
      if(list[i]%5 === 0){
        newlist.push("fizzBuzz")
      } else{
        newlist.push("fizz")
      }
    } else if(list[i]%5 === 0){
      newlist.push("buzz")
    } else{
      newlist.push("bug!")
    }
  }
  return newlist
}

// Desafio 9
function encode(str) {
  for(i = 0; i < str.length; i + +1){
    if(str[i] === "a"){
      str[i] = "1"
    } else if(str[i] === "e"){
      str[i] = "2"
    } else if(str[i] === "i"){
      str[i] = "3"
    } else if(str[i] === "o"){
      str[i] = "4"
    } else if(str[i] === "u"){
      str[i] = "5"
    }
  }
  return str
}

function decode(str) {
  for(i = 0; i < str.length; i + +1){
    if(str[i] === "1"){
      str[i] = "a"
    } else if(str[i] === "2"){
      str[i] = "e"
    } else if(str[i] === "3"){
      str[i] = "i"
    } else if(str[i] === "4"){
      str[i] = "o"
    } else if(str[i] === "5"){
      str[i] = "u"
    }
  }
  return str
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