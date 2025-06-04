let btn = document.getElementById('btn');

// OnClick Event
function CheckBtn1(){
 console.log("Button 1 Cliecked")
}

function CheckBtn2(){
  console.log("Button 2 Cliecked")
}

function CheckBtn3(){
  console.log("Button 3 Cliecked")
}

let box = document.getElementById('box');

function checkBox1() {
  console.log("Mouse Entered");
}

function checkBox2() {
  console.log("Mouse Leaved");
}

function checkBox3(){
  console.log("Mouse Moving...")
}

function checkBox4(){
  console.log("Mouse Downed");
}

function checkBox5(){
  console.log("Mouse Upped");
}
function checkBox6(){
  console.log("Mouse Overed");
}

let name = document.getElementById('name');

function checkInput1() {
    console.log(name.value);
}

function checkInput2() {
  console.log(name.value);
}

function checkValidation(){
    if(!name.value){
      let message = document.getElementById('message');
      message.style.display = "block";
      console.log("Please Enter Your Name...")
    }else{
      message.style.display = "none";
    }
}

// function checkKey1(){
//   console.log("key Up");
// }