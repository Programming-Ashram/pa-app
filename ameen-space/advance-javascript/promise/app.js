// Clouser function

// // let x = 10;

// function parent(){
//     let x = 10;
//     function result(){
//         console.log(x);
//     }
//     result();
// }
// parent();

// Callback function
// function template(props){
//     console.log("Hello my name is " + props);
// }

// function postData(fname, lname, myCallbackFn){    
//     let fullname = `${fname} ${lname} `;
//     myCallbackFn(fullname);
// }

// postData("Ameen", "Khan", template);

// Prmoise
function template(props){
    console.log("Hello my name is " + props);
}

let myPromise = new Promise(function(myResolve, myReject){
    let x = "Ameen";

    if(x === "Ameen"){
        myResolve("Ameen Found");
    }
    else{
        myReject("Something went Wrong");
    }
});

myPromise.then(
    function(value){template},
    function(error){template}
)