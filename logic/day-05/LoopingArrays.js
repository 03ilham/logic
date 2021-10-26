const cars = [5,6,7,8,9,10,11,12];
function rotasiArray(array,j) {
  let array1 = [...array];
  let s = "";
  for (let i = 1; i <= j; i++) {
    let array2 = [...array1.slice(7), ...array1.slice(0,7)]
    s = s + `[${array1}] => [${array2}]\n`
    array1 = array2
  }
  return s;   
}

console.log(rotasiArray(cars,2));


// membalikan 5 menjadi di depan
const gerbong = [1,2,3,4,5];
const array1 = [...gerbong];
const array2 = [...array1.slice(4),...array1.slice(0,4)];
console.log(`[${array2}]`);
