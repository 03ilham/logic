// create class, template untuk mengcreate object employee

 export default class Employee{
    constructor(firstName,lastName,salary=0,skill=[],status="permanent",portopolio={ipk : 0}){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.skill = skill;
        this.status = status;   
        this.portopolio = portopolio;
    }

    // create function di class employee
    toString(){
        return `${this.firstName} ${this.lastName}, salary : ${this.salary}`
    }
}

class contract extends Employee{
    constructor(firstName,lastName,salary=0,skill=[],status="permanent",portopolio={ipk : 0},xtratime=0){
        super(firstName,lastName,salary,skill,status,portopolio);
        this.xtratime = xtratime;
    }
    toString(){
       return super.toString()+`, uang lembur : ${this.xtratime}, total gaji = ${this.salary+this.xtratime}`
    }
}

export {contract};

//object instance, emp1 udah di create di memory
// const emp1 = new Employee("jhon","black",5000);
// const emp2 = new Employee("arya","stark",4000,["java","oracle"],"kontrak",{ipk : 3.00});
// const emp3 = new Employee("dian","kang",4500,["c#"]);

// const listEmployee = [emp1,emp2,emp3];

// console.log(emp1.toString());

// console.log();
