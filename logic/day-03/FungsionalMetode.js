const programming = ["java","js","phyton","golang","sql","oracle","postgres"];

const indexOracle = programming.indexOf("oracle");
const idexPostgrade = programming.lastIndexOf("postgres");
const indexJava = programming.includes("java");

// searching by find first match
const nums =[2,4,19,15,198,7,1,1];
const bigNum = nums.find(element => element > 10);

// menampilkan element yg lebih dari 10
const bigNums = nums.filter(element => element > 10);


//method map
const numbers = [2,3,4,5,6,10,15];
const byFIve = numbers.map(element => element * 5);

// every
const every = numbers.every(element => element % 2 === 0);// retuern false 

//some
const some = numbers.some(element => element % 2 === 0);// return true


console.log();