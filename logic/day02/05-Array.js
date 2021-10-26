// declaration array
const emptyArray = [];

const foods = ["sup", "pizza", "pasta"]

// add element di lasst index
foods. push("indomie");
// happus lastindex
foods .pop()

// add element di firstindex
foods.unshift("baso");
//hapus element di firstindex
foods.shift()

//display
console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);

//display bty looping
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}

const s = "bootcamp codeid academy";
const arr = s.split(" ");




console.log(arr);
