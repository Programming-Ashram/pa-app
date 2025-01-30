//Closer Function

// let x = 24+11+1999;
// function closer(){
//     let x = 24+11+1999;
//     function result(){
//         console.log(x);
//     }
//     result();
// }
// closer();

// Callbacl Function

function template(book){
    console.log("I Love You " + book);
}

function informData(fname, lname, myCallbackFn){
    let fullname = `${fname} ${lname}`;
    myCallbackFn(fullname);
}
 informData("India", "people", template);

 //Prmoise Function
    // function template(savidhan){
    //     console.log("I Love my " + savidhan);
    // }

    // let myPromise = new Promise(function(myResolve, myReject){
    // let x = "My Mom";

    // if(x === "My Mom"){
    //     myResolve("Sucsess Found");
    // }
    // else{
    //     myReject("Something went Wrong");
    // }

    // });

    myPromise.then(
        function(value){template(value)},
        function(error){template(error)}
    )




