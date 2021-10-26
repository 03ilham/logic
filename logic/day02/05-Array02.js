// sorting array number
const numbers = [34,2,3,54,223,65];
const sortNumber = numbers.sort((a,b) => a-b);
console.log(sortNumber);

// sorting string
const foods = ["sup", "pizza", "pasta","anggur", "baso", "chiki"];
const sortFoods = foods.sort();
const reverseFoods = foods.reverse();
const sortFoods2 = foods.sort((a,b) => a > b ? -1 : 1);
console.log(sortFoods2);