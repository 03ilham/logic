const programming = ["java","js","phyton","golang","sql","oracle","postgres"];

// get index sql = 4
const sql = programming.indexOf("sql")
//menhapus element mulai dari index ke 4 s/d terakhir
//programming.splice(sql)

//console.log(programming.splice(4,2));
//menghapus element di index ke 4 s/d index 5, insert 2 element baru 
console.log(programming.splice(4,1,".NET","sqlserver"));


console.log();
