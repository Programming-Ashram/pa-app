//class Fumction
class employee{
    constructor(employeeName,employeeAge,employeeSalary){
        this.employeeName = employeeName;
        this.employeeAge = employeeAge;
        this.employeeSalary = employeeSalary;
    }
    updateSalary = (newSalary)=>{
        this.employeeSalary = newSalary;
    }
};
updateSalary = (newSalary)=>{
    this.employeeSalary = newSalary;
}


let employee1 = new employee("Ameen","24","30000");
let employee2 = new employee("jeeshan","23","220000");
let employee3 = new employee("Taslim","21","270000");
let employee4 = new employee("pranjal","21","240000");
let OOPs = document.getElementById('OOPs');

employee1.updateSalary("500000");
 
let groupemployee = [employee1,employee2,employee3,employee4];
 
console.log(groupemployee);

groupemployee.forEach(employee =>{
     console.log(employee.employeeSalary);

})