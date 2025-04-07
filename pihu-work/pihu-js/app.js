let fruits = ["Apple", "Banana", "Orange", "Mango", "Guava", "Pineapple"];

// console.log(fruits[0], fruits[1], fruits[2], fruits[3]);

// for loop retuns index - (as a number)
for(let i = 0; i < fruits.length; i++){
  console.log(i)
}

// for of - Return Value
for(let i of fruits){
  console.log(i)
}

// for in - return index (as a string)
for(let i in fruits){
  console.log(i);
}

// for each
fruits.forEach(i =>{
  console.log(i)
})
