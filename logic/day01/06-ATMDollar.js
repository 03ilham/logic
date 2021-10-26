/**
 * ATM BCA menyediakan pecahan $20, $10, $5, $1
 * jika customer mengamil uang $76, maka ATM akan mengeluarkan uang 
 * $20 = 3 lembar, $10 = 1 lembar, $5 = 1 lembar, $1 = 1 lembar
 */

const dollar = 175;
let duaPuluh, sepuluh, lima, satu, sisa;

duaPuluh = parseInt(dollar/20);
sisa = dollar % 20;

sepuluh = parseInt(sisa/10);
sisa = sisa % 10;

lima = parseInt(sisa/5);
satu = sisa % 5;

//satu = sisa;

console.log(`
$20 ${duaPuluh} lembar,
$10 ${sepuluh} lembar,
$5 ${lima} lembar,
$1 ${satu} lembar,`);
 