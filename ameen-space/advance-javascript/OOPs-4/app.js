class Student{
    constructor(){
        var name;
        var email;
    }

    //name
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name; 
    }

    //Email
    getEmail(){
        return this.email;
    }

    setEmail(email){
        this.email = email;
    }

}

 let st1 = new Student();

 st1.setName("Ameen");
 st1.setEmail("afkk86@gmail.com");

 let st2 = new Student();

 st2.setName("Payal");
 st2.setEmail("payal786@gmail.com");

 let groups = [st1, st2];
 console.log(groups);