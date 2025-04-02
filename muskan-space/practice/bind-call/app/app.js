//let obj = {
  //  name:"pranjal"
//}

//console.log(Object.name);


const template = {
    fullname : function(){
        return "hello my name is "+this.fname + " my surname is "  +  this.lname; 
    }
};

let data1 ={
    fname: "muskan",
    lname: "sharnagat",

}
console.log(template.fullname.call(data1));




let user1 ={
    fname: "ayushman",
    lname: "chaurasiya",


    //private method
    fullname : function(){
        return "hello my name is "+ this.firstname + "my suranme is" + this.lname;
    }

}

let user2 = {
        firstname: "pranjal",
        lname: "mankar"

}

let user3 ={
    firstname: "jeeshan",
    lname: "sheikh"
}


//let getData = user2.fullname();
//let getData = user1.fullname.bind(user2);
//console.log(getData())

//let user3data = user1.fullname.bind(user3);
//console.log(user3data());

//console.log(getData);
//console.log(user1.fullName.call(user1));






//clouser
//global scope
let x =10;
function calculator(){
    //local scope
    //let x = 10;
    function sub(){
        console.log(x-6);

        function add(){
            console.log(x + 6);
        }
        add();

    }sub();
}calculator()

function siblingfn(){
    console.log(x);
}
siblingfn();

//call back function
function template(getData){
    document.writeln("hello my name is "+ getData);
}

//---------------[Ayushman]-[chaurasiya]--------------(template(as a function))
function work (fname, lname, myCallback){
    //---fetch Data
    let fetchData  = `${fname}  ${lname}`;
    // template()
    myCallback(fetchData);
}


//-----------------------(Function as arg)
work("Ayushman", "Chaurasiya", template);

function testResult(prpos){
    console.log(prpos);
}


function apiDataStatus(props){
    console.log(propos);
}

let myGreet = new Promise(function(myResolve,myReject){
    let fname;

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