
// var x = 90;

// BOM 
// alert(x - 1);
// console.log(x - 2);
// document.writeln("Srijan");
// prompt("What is our age");
// confirm("Are you want to delete");

// DOM
// document.querySelector('h1').innerText = "Srijan";
// document.querySelector('h1').style.color = "blue";
// document.querySelector('h1').style.backgroundColor = "pink";

// variables

// var x  = 5;
// var x  = 10;
// x = 100;
// console.log(x);

// let x  = 5;
// x = 10;
// x = 600;
// console.log(x);

// const x = 1;
// console.log(x);

// Data Types = Premetive & NoN Premetive

// var x = null; //number
// console.log(typeof(x));
// var x = "10" // string
// var lightOn = true || false; // boolean
// var y; // Undefined
// var salery = null; // Null

// NoN Premetive

// Array -====[0]======-=[1]=======[2]
var group = ["Apple", "Banana", "Grapes"];
var employees = [
    {
        empName: "Ansh",
        empSalery : "1Lac",
        empDesintaion: "Software Developer"
    },
    {
        empName: "Ayushman",
        empSalery : "1Lac",
        empDesintaion: "Software Developer"
    },{
        empName: "Shivam",
        empSalery : "",
        empDesintaion: "Software Developer"
    },{
        empName: "",
        empSalery : "1Lac",
        empDesintaion: "Software Developer"
    }
    ,{
        empName: "Srijan",
        empSalery : "1Lac",
        empDesintaion: "Software Developer"
    }
];

for(var i = 0; i < employees.length; i++){
    var list = document.querySelector('ul');
    console.log();
    list.innerHTML += `
        <li class="text-primary">Hello i am  ${employees[i].empName} and my designation is  ${employees[i].empDesintaion} and my salery is  ${employees[i].empSalery}</li>
    `;
}