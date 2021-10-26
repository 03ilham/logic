//number
const n = 150.86;
console.log(typeof n );

//convert to float
console.log(parseFloat(n));

//convert to integer
console.log(parseInt(n));

//convert string to number
const num = "3.14159";
console.log(Number(num));
const s ="Hello";
console.log(Number(s));

//round number
const price = 150.98454;
console.log(price.toFixed(3));

//cek kondisi infutan number atau bukan
console.log(isNaN("Hello"));
console.log(isNaN(45));
console.log(isNaN("45"));I

//number math
Math.sqrt(9);
Math.pow(2,3);
Math.PI;
Math.round(4.678);

//round down
Math.floor(5.678);
//round up
Math.ceil(5.678);

Math.max(3,9,13);

Math.min(3,9,13);

Math.abs(-3.14159);

Math.random() * 10;
