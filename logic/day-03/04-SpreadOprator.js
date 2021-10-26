const number = [3,4,5,6,7];
//spread oprator selalu di simpan di sebelah kanan
const numberCopy = [...number];
console.log(numberCopy);

number.push(10);

//merging two array
const ganjil1 = [1,3,5,7];
const genap = [2,4,6,8]
//large array concat
const bilangan = ganjil1.concat(genap).sort();

//spread oprator bisa di tambahkan dgn elemen lain
const gage = [...ganjil1,...genap,9,10,11]

console.log();