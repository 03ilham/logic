const employee={
    firstName : "jhon",
    lastName : "black",
    salary : 5000,
    portofolio : {
        ipk : 3.45,
        skill : ["java","oracle"]
    }
}

//older version cloning object
const person = Object.assign({},employee);

//cloning object mrnggunakan spread oprator
const emps = {...employee};

//destructure object / extract properties ke variable
const{firstName,lastName,salary,portofolio : {ipk,skill}} = employee;
console.log("firstName  :"+firstName);

console.log();