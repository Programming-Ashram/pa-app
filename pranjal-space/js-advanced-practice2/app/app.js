// clouser
// global scope

let x = 10;
function calculator(){
    //local  scope
    //let x=10;

    function sub(){
        console.log(x - 6)
        function add(){
            console.log(x + 6);
        }
        add();
    }sub();
}calculator()

function siblingFn(){
    console.log(x);
}
siblingFn();

// call back function
function template(getData){
    document.writeln("hello my name is" +getData);
}

//------------[pranjal]------[mankar]----------(template (as a function))
function work(fname, lname, myCallBack){
    //---Fetch Data
    let fetchData = `${fname} ${lname}`;
    // template ()
    myCallBack(fetchData);
}

//-------------------(function as arg)

work("pranjal","Mankar",template);

function apiDataStatus(props){
    console.log(props);
}
let  mygreet = new Promise(function(myResolve, myReject){
    let fname;
    if(fname === "kajal"){
        myReject("Error");
    }
});
mygreet.then(
    function(value){apiDataStatus(value)},
    function(error){apiDataStatus(error)},
)