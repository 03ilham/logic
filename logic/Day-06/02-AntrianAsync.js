// antrian asnyc with arrow function

const antrian1 = () => {
  console.log("Antrian 1 : Beli KFC paket A");
};

const antrian2 = () => {
  console.log("Antrian 2 : Beli KFC Hamburge");
  setTimeout(() => {}, 2000);
};

const antrian3 = () => {
  console.log("Antrian 3 : Beli KFC paket C");
};

const antrian1 = () => {
  console.log("Antrian 1 : Beli KFC paket A");
};

const antrian2 = () => {
  console.log("Antrian 1 : Beli KFC paket B");
};

const antrian4 = () => {
  console.log("Antrian 4 : Beli Sup Ayam");
  setTimeout(() => {}, 1000);
};

antrian1();
antrian2();
antrian3();
antrian4();
