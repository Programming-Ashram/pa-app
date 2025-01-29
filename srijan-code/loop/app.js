// var, let, const
// with var keyword we can reasign and re decleare variable
// var x = 10;
// var x = 60;

// with Let keyword we can reasign but  can not re decleare variable
// let x = 10;
// let x = 70; // It's not Works
// x = 70;
// console.log(x);

//  with Const keyword we can not reasign as well as redeclear.
// const x = 10;
// x = 60;
// console.log(x);

// Premitive
// string, number, boolean, null, undefiend

// let name = "40"
let result = "Ayushman" - "1";
// console.log(result);
// let name = 40
// let result = true
// let salery = null
// let salery;
// console.log(typeof(salery));

// Non Premitive
// ---------------------[Part of OOPs]--------------------------[Part of OOPs]-------------
// array (By Literal, Instanse Of, Constructor, 2d array, nested array), object (By Literal, Instanse Of, Constructor), regx

// let fruits = ["Apple", "Banana", "Orange", "Grapes"];
// let object = {
//     name: 'Ayushman',
//     age: 23,
//     proffesion: "Software Develeoper"
// };
let users = [
    {
        name: 'Ayushman',
        age: 23,
        proffesion: "Software Develeoper"
    },
    {
        name: 'Srijan',
        age: 23,
        proffesion: "Software Develeoper"
    },
    {
        name: 'Muskan',
        age: 23,
        proffesion: "Software Develeoper"
    },
    {
        name: 'Ankit',
        age: 23,
        proffesion: "Software Develeoper"
    },
]

// Loop
// for loop, for in, for of, for each loop, while loop, do while loop.
// returns indexing as a number
for(let i = 0; i < users.length; i++){
    console.log(i + " " + typeof(i));
}

// returns indexing as a String
for(let i in users){
    console.log(i + " " + typeof(i));
}

// for(let i of users){
//     console.log(i.name);
// }
