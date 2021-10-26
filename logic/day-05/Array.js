// const cars = [];
// cars.push(9);
// cars.push(8);
// cars.push(6);
// cars.push(7);
// cars.push(5);

// cars.sort();
// Math.max(...cars);


// console.log(cars);
const cars = [5,6,7,8,9];
function puterArray(array,b){
    let array1 = [...array];
    let s = "";
    for (let i = 1; i <= b; i++) {
       let array2 = [...array1.slice(-1),...array1.slice(0,-1)]
       s = s + `[${array1}] => [${array2}]\n` 
       array1 = array2
    }
    return s;
}

console.log(puterArray(cars,3));

const a = [5,6,7,8,9];
const a2 = [...a.slice(-1),...a.slice(0,-1)]
console.log(`[${a}] => [${a2}]`);


