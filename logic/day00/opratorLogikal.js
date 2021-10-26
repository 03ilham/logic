let isTrue = true && true;
console.log(isTrue);

isTrue = 10 === 10 && 10 !== 11 && 11 > 12;
console.log(isTrue);

let isFalse = true && false;
console.log(isFalse);

isFalse = false && true;
console.log(isFalse);

isFalse = false && false;
console.log(isFalse);

let orTrue = true || false;
console.log(orTrue);

let orFalse = false || false;
console.log(orFalse);

//conditional statement
const isStudent = true;
if (isStudent){
    console.log(`Student is ${isStudent}`);
}