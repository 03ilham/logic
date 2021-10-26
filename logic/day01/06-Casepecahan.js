// uang 100,000, berapa duit jika di pecah ke 


const uang = 55850
let puluhRibu,ribuan,ratusan,puluhan,satuan,sisa;


puluhRibu = parseInt(uang/10000);
sisa = uang % 10000;

ribuan = parseInt(sisa/1000)
sisa = sisa % 1000;

ratusan = parseInt(sisa/100)
sisa = sisa % 100

puluhan = parseInt(sisa/10)
sisa = sisa % 10;

satuan = sisa;


console.log(`Rp.10rb ${puluhRibu} lembar, Rp.1000 ${ribuan} lembar, Rp.100 ${ratusan} lembar,
Rp.10 ${puluhan} koin, Rp.1 ${satuan} koin`);




