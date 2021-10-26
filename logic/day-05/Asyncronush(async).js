// asyncronous script code
const antrian1 = () => {
    console.log("Antrian 1 : Beli KFC paket A");
}

const antrian2 = () => {
    setTimeout(() => {
        console.log("Antrian 2 : Beli Sup Ayam");
    },2000);
}

const antrian3 = () => {
    console.log("Antrian 3 : Beli KFC paket C");
}

const antrian4 = () => {
    setTimeout(() => {
        console.log("Antrian 4 : Beli Burger");
    },1000);
}

// call function 
antrian1();
antrian2();
antrian3();
// jika function antrian 4() panggil setTimeout(),
// maka js akan menyimpannya di antrian(callback queue)
antrian4();

/**output
 * Antrian 1 : Beli KFC paket A
 * Antrian 3 : Beli KFC paket C
 * Antrian 4 : Beli Burger
 * Antrian 5 : Beli Sup Ayam
 */