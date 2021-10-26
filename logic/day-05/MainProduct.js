import product from "./Product.js";


const prod1 = new product(1, "Samsung A1", "HP", 1500000, 1);


const prod2 = new product(2, "Dell Ultrabook", "COMPUTER", 7850000, 2);
const prod3 = new product(3, "Mesin cuci lg", "ELECTRONIC", 3500000, 1);
const prod4 = new product(4, "iphone", "HP", 6000000, 2);
const prod5 = new product(5, "Asus Laptop", "COMPUTER", 6500000, 4);
const prod6 = new product(6, "vivo V19", "HP", 2500000, 2);


//declare listcart
let listCart = [];

function addToCart(product) {
    listCart = [...listCart, product];
    return listCart;
}

addToCart(prod1);
addToCart(prod2);
addToCart(prod3);
addToCart(prod4);
addToCart(prod5);
addToCart(prod6);


// display all product
function findAllProduct(array = []) {
    return array;
}
console.log(findAllProduct(listCart));

//anonymous function
(hello) => {
    console.log(hello)
}

//filter product by category dengan parameter hardcode;
//const listCategory = listCart.filter((el)=> el.category === "HP");
function findProductByCategory(category) {
    return listCart.filter((el) => el.category === category);
}
// isi listCategory dengan function parameter
const listCategory1 = findProductByCategory("COMPUTER");
console.log(listCategory1);

const listCategory2 = findProductByCategory("HP");
console.log(listCategory2);

const listCategory3 = findProductByCategory("ELECTRONIC");
console.log(listCategory3);

// display total tagihan subTotal
const totalTagihan = listCart.reduce((sum, val) => sum + val.subTotal, 0);
console.log(`Total Tagihan = Rp.${totalTagihan}`);


//display total tagihan subtotal dengan discount
const subTotalDiscount = listCart.reduce((sum, val) => {
    if (val.jmlBeli > 1 ) {
        return sum + (val.subTotal - (val.subTotal * 10 / 100));
    } else {
            return sum + val.subTotal;
    }
}, 0)
console.log(`Total tagihan + discount = Rp.${subTotalDiscount}`);

// reduce (param1,param2), param1 =anonymouse function, param2 = initial value

//display total tagihan subtotal dengan discount with ternary operation
/* const subTotalDiscount2 = listCart.reduce((sum, val) => 
    (val.jmlBeli > 1) ? sum + (val.subTotal - (val.subTotal * 10 / 100)) 
    : (sum + val.subTotal > 1000000 ? sum + val.subTotal - 50000 : sum+val.subTotal) ,0); */

const subTotalDiscount2 = listCart.reduce((sum, val) =>
    (val.jmlBeli > 1) ? sum + (val.subTotal - (val.subTotal * 10 / 100)) : sum + val.subTotal, 0);
console.log(`Total tagihan + discount2 = Rp.${subTotalDiscount2}`);


// insert product to array listCart  
/* listCart = [...listCart,prod1];
listCart = [...listCart,prod2];
listCart = [...listCart,prod3];
listCart = [...listCart,prod4];
listCart = [...listCart,prod5]; */

console.log(prod1.toString());
// console.log(prod2.toString());
// console.log(prod3.toString());
// console.log(prod4.toString());
// console.log(prod5.toString());






console.log();