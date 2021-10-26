let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];

//menambahkan anggur,banana,sirsak
fruits.push("anggur","banana","sirsak");
console.log(fruits);

//menghapus sirsak
fruits.pop();
console.log(fruits);

//menghapus jambu
fruits.splice(2,1);
console.log(fruits);

//untuk menghapus durian,rambutan,anggur
fruits.splice(2,3);
console.log(fruits);

//untuk menambahkan rambutan dan bengkuang
fruits.push("rambutan","bengkuang");
console.log(fruits);

//untuk replase banana dengan nangka
fruits.splice(2,1,"nangka");
console.log(fruits);

//concat join array
let vege = ["kangkung","tomat","bawang","bayam"];
const a = fruits.concat(vege);
console.log(fruits);

//reverse
const reverseFruits = a.reverse();
console.log(reverseFruits);

console.log(reverseFruits);