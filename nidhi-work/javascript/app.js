// let card = document.getElementById('card');

// function addClass(){
//   card.classList.add('bg-primary');
// }
// function removeClass(){
//   card.classList.remove('bg-primary');
// }
// function toggleClass(){
//   card.classList.toggle('bg-primary');
// }
// function replaceClass(){
//   card.classList.replace('bg-primary','bg-warning')
// }



// array.push("Mango");
// array.push("Grapes");
// array.push("Guava");

// array.pop();
// array.shift();

// console.log(array);

let inp = document.getElementById('textSpace');
function addTodo(){
  let array = [];
  array.push(inp.value);
  for(let i = 0; i < array.length; i++){
    let list = document.querySelector('#list');
    list.innerHTML +=`
      <li>${array[i]} </li>
    `;
  }
}