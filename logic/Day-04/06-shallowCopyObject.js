// cloning object shallowu

const employee={
    firstName : "jhon",
    lastName : "black",
    salary : 5000,
    skill : ["java","oracle","nodejs"]   
}

const programmer = {...employee};
//terjadi shallow object artinya skill me-refer ke adress memory yang sama
//dengan skil di object employee
//programmer.skill[1] = "postgres";

programmer.skill = [...programmer.skill];
programmer.skill[1] = "postgres"

console.log(programmer);