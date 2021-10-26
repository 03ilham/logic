// MAP collection untuk menyimpan unique pair

const carts = new Map();
carts.set(1,"indomie");
carts.set(2,"kripik");
carts.set(3,"HP");
carts.set(4,"HP");

carts.delete(3);

console.log(carts.size);

//display
for (const [key,value] of carts) {
    console.log(key + " "+value);
}