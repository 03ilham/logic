// copy array

const employees = ["andi", "charlie", "delta", "gita", "hari", "zeni"];

// same references
const empsA11 = employees;

employees.push("iqbal");

//copy array
const empsPermanent = Array.of(employees);

const freelance = ["dian", "budi"];

//concat array
const contractEmps = empsPermanent.concat(freelance);

console.log(contractEmps);





console.log();
