// let body = document.querySelector('body');

// function test(){
//      body.style.background ="black";
// }
// let colorChange = document.querySelector('#colorChange');
// function color1(){
//      colorChange.style.background = 'red'
// }
// let colorRemove = document.querySelector('#colorRemove');
// function color2(){
//      colorRemove.style.background = 'green'
// }
// let muskanShow = document.querySelector('#muskanShow');
// let pranjalShow = document.querySelector('#pranjalShow');
// muskanShow.style.display = 'none';
// pranjalShow.style.display = 'none'

// function text(){
//      muskanShow.style.display = 'block';
//      pranjalShow.style.display = 'none'
// }
// function past(){
//      muskanShow.style.display = 'none';
//      pranjalShow.style.display = 'block'
// }
// twoTimes = document.querySelector('#twoTimes');

// function task(){
//      twoTimes.style.background = 'pink'
// }

// bulbGlow = document.querySelector('#bulbGlow');
// hide = document.querySelector('#hide');
// bulbGlow.style.display = 'none';
// function highlight(){
//      bulbGlow.style.display = 'block';
//      hide.style.display = 'none'
// }
// function dark(){
//      bulbGlow.style.display = 'none';
//      hide.style.display = 'block'
// }

//  let push = document.querySelector('#push');
//  function hit(){
//      push.style.background ="green"
//  }

// jinat = document.querySelector('#jinat');
// gulshan = document.querySelector('#gulshan');

// jinat.style.display = 'none';
// gulshan.style.display = 'none';

// function jinatshow(){
//      jinat.style.display = 'block';
//      gulshan.style.display = 'none';
// }
// function gulshanshow(){
//      jinat.style.display = 'none';
//      gulshan.style.display = 'block';
// }
// hide = document.querySelector('#hide');
// show = document.querySelector('#show')
// hide.style.display = 'block';
// show.style.display = 'none'
// function on(){
//      hide.style.display = 'none';
//      show.style.display = 'block'
// }
// function off(){
//      hide.style.display = 'block';
//      show.style.display = 'none'
// }

// let mode = document.querySelector('#mode');

let square = document.querySelector('#square');

function moving(){
     square.style.background = "red"
}

function squaredown(){
     square.style.background = "green"
}

function squareup(){
     square.style.background = "pink"
}

function squareleave(){
     square.style.background = "black"
}

function squareenter(){
     square.style.background = "purple"
}
let body = document.querySelector('body')
let bullian = document.querySelector('#bullian');

let newimage = document.createElement('img');

function task(){
     if(bullian.value === 'apple'){
          body.appendChild(newimage);
          newimage.setAttribute('src','https://5.imimg.com/data5/NL/FU/MY-48841722/apple-fruit-500x500.jpeg');
          console.log("success")
     }
     else(
          newimage.style.display = 'none'
          
     )
}