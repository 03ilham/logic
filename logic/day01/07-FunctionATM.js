// regular function non params

function atm() {
    return "ATM BCA"
}

//

//with params
function atmDollar(dollar) {
    let duaPuluh, sepuluh, lima, satu, sisa;

    if (isNaN(dollar)) {
        return `${dollar} is not a number, please enter a number`
    }

duaPuluh = parseInt(dollar/20);
sisa = dollar % 20;

sepuluh = parseInt(sisa/10);
sisa = sisa % 10;

lima = parseInt(sisa/5);
satu = sisa % 5

return `dollar = ${dollar}
$20 ${duaPuluh} lembar, 
$10 ${sepuluh} lembar, 
$5 ${lima} lembar,
$1 ${satu} lembar,`
}
/* 
console.log(atm());

console.log(atmDollar(187));

console.log(atmDollar(199));

console.log(atmDollar(219)); */


console.log(atmDollar("333a"));

console.log(atmDollar("333"));


