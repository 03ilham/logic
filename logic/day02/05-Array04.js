const employees = ["andi", "charlie", "delta", "gita", "hari", "zeni"];

//console.log(employees[2]);

function searchEmp(listEmp,key) {
    for (let i = 0; i < listEmp.length; i++) {
        if(key === listEmp[i] ){
            return `Emplolyes ${key} found di index ke-${i}`
        }
    }

    return `Employes ${key} not found`;

}

console.log(searchEmp(employees,"zeni"));