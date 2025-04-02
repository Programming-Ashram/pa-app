// alert("Hello");
// console.log("Hello");
// document.write("Hello");
// confirm("Are you want to delete this...?");
// prompt("Please Enter your name...");
// console.error("This is test error...");

// Variable
// var (keyword)
// var name = "Pihu";
// var name = "Muskan";
// console.log(name);
// let (keyword)
// let name = "Pihu";
// let name = "Muskan";
// console.log(name);
// const (keyword)
// const num = 500;
// console.log(num);


// let result1 = 50;
// let result2 = 50;

// let finalResult = result1 + result2;

// console.log(finalResult);

// let agree = document.getElementById("agree");

// function checkCondtion(){
//   if(agree.checked == true){
//     console.log("Your are Agree");
//   }else{
//     console.log("Your are not agree")
//   }
// }

// let x = "Monday";

// function checkEvent(){
//   switch (x) {
//     case "Monday":
//       console.log("Navratri");
//       break;
//     case "Sunday":
//       console.log("Holiday");
//       break;
//     case 70:
//       console.log("X is 70");
//       break;

//     default:
//       console.log("X is not 20 or 30");
//       break;
//   }
// }

// class  Car{
//   constructor(parameters) {
//       this.parameters = parameters;
//   }
// }

// export default Car;


let day = document.getElementById('day');


function checkday() {
  let currentday = day.value;
  switch (currentday) {
    case 'Monday':
      console.log("Event for Coding")
      break;
    case 'Tuesday':
      console.log("PIP event");
      break;
    case 'Wednesday':
      console.log("Event for Play")
      break;

    default:
      console.log("No Event for this day")
      break;
  }
}