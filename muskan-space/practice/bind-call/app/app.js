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