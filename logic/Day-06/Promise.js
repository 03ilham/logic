// contoh promise
const mypromise = new Promise((resolve, reject) => {
    if ((Math.random() * 10) <= 5){
        resolve('lunas yaa....!')
    }
    reject(new Error('Belum ada uang, ntar sok yah...!'))
}) 

//call function mypromise
mypromise
    //keyword .then di gunakan untuk menghandle return 
    //reserponse success dari callback resolve
    .then(response=>console.log(response))
    //keyword .catch adalah function untuk menghandle
    //eror yang di kirim dari callback reject
    .catch(error=>console.log(error))

