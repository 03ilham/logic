//declaration date
const today = new Date();
console.log(today.getDay());
console.log(today.getMonth());
console.log(today.getFullYear());


//get info time
const hours = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

console.log(`jam ${hours}:${minute};${second}`);

//declaration date with argument
const tomorrow = new Date(2021,8,8);
console.log(tomorrow);

//declaration date with time
const aventDate = new Date("2021-08-12T05:12:00Z");
console.log(aventDate);

//adding date
const now = new Date();
//const currentDate  = getDate();
const currentDate = now.getDate();
now.setDate(now.getDate()+3)
console.log(`booking date : ${now}`);
//date time format indonesia
console.log(`Format Date : ${new Intl.DateTimeFormat('id-ID').format(now)}`);

//compaare between date
const startDate =  new Date(2021,8,7);
const endDate = new Date (2021,8,10);

const selisihDate = endDate - startDate;

console.log(`selisih date : ${selisihDate}`);

if (endDate > startDate){
    console.log(`${endDate} > ${startDate}`);
}

const milliSecondperDay = 1000 * 60 * 60  *24;
let countDay = selisihDate / milliSecondperDay
console.log(countDay);

//date time format indonesia
console.log();

