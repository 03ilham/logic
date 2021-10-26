const numbers = [2000, 42, 5, 304, 1, 1300];
function maxNumber(numbers){
    return Math.max(...numbers);
}

console.log(maxNumber(numbers));