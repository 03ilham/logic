const getNomorAntri = async(nomor)=>{
    if (nomor <= 10) {
        return Promise.resolve(nomor);
    } else {
        return Promise.reject("Antrian habis")
    }
}


console.log(getNomorAntri(10));
getNomorAntri(10)
    .then(reserponse => console.log(reserponse))
    .catch(error => console.log(error));
console.log();
