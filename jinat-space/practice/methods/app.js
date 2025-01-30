

// // call back function
// function template(getData){
//      console.log("hello my name is" + getData);
// }

// function work(fname,lname , myCallBack){
//      let fullname = `${fname} ${lname}`;
//      myCallBack(fullname);
// }

// work("Jinat", "Qureshi", template);


// // clouser function

// function calculator(){
//      let x = 12;

//      function add(){
//           console.log(x + 5)

//           function sub(){
//                console.log(x - 3)
//           }
//           sub();
//      }
//      add();
// }calculator()


// // promise

// function apiDataStatus(props){
//      console.log(props);
// }
// let myGreet = new Promise(function(myResolve, myReject){
//      let fname = "Pranjal";

//      if(fname === "Pranjal"){
//           myResolve("Found Pranjal");
//      }
//      else{
//           myReject("Error");
//      }
// })

// myGreet.then(
//      function(value){apiDataStatus(value)},
//      function(error){apiDataStatus(error)},
// )


function calculator(){
     let x = 23
     function add(){
          console.log(x + 3);
          function sub(){
               console.log(x - 6);
          }
          sub();
     }add();
     
}calculator()

function template(getData){
     console.log("Hello my name is "+ getData)
}

function work(fname , lname , myCallBack){
     let fullname =`${fname} ${lname}`;
     myCallBack(fullname)
}

work('Jinat', 'Qureshi',template );

function apiDataStatus(props){
     console.log(props);
}
let myGreet = new Promise(function(myResolve , myReject){
     let fname = "Jinat";

     if(fname === "Jinat"){
          myResolve("found jinat");
     }
     else{
          myReject("error");
     }
})
myGreet.then(
     function(value){apiDataStatus(value)},
     function(error){apiDataStatus(error)}
)