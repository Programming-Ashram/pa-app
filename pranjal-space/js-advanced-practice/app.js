//clouser
//Global Scope

let x = 10;
function Calculator(){
    // Local Scope
    //let x = 10;
    function sub(){
        console.log(x-6);

        function add (){
            console.log(x + 6);
        }
        add();
    }sub();
}Calculator()

function siblingFn(){
    console.log(x);
}
siblingFn();

//  call back function
function template(getData){
    document.writeln("hello  my name is "+ getData);
}

//---------------------[ayushman]--[chaurasiya]-----------(template(as a function))
function work(fname, lname, myCallBack){
    //----Fetch Data
    let fetchData=`${fname} ${lname}`;
    // template()
    myCallBack(fetchData);
}

//----------------------(Function as arg)
work("Prakash", "Mankar",template);

function testResult(props){
    console.log(props);
}

function apiDataStatus(props){
    console.log("Hello " + props);
}
let myGreet = new Promise(function(myResolve, myReject){
   
    if(fname === "pranjal"){
        myResolve("found pranjal");
    }
    else{
        myReject("Error");
    }
});
myGreet.then(
    function(value){apiDataStatus(value)},
    function(error){apiDataStatus(error)}
)