const arr = [3, 8, 9, 7, 6];
function rotateArray(array, k) {
  let array1 = [...array];
  let empty = "";

  for (let i = 1; i <= k; i++) {
    let array2 = [...array1.slice(4), ...array1.slice(0, 4)];
    empty = empty + `[${array1}] => [${array2}]\n`;
    array1 = array2;
  }

  return empty;
}

console.log(rotateArray(arr, 3));

const gerbong = [3, 8, 9, 7, 6];
let array1 = [...gerbong];
let n = "";
for (let i = 0; i < 3; i++) {
  let array2 = [...array1.slice(4), ...array1.slice(0, 4)];
  n = n + `[${array1}] => [${array2}]\n`;
  array1 = array2;
}
console.log(n);



// let a = [1,2,3,4,5,6]
// let b = [...a.slice(5),...a.slice(0,5)]
// console.log(b);