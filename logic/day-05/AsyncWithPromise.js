// async with promise
async function getNomorAntri(nomor){
    if(nomor <= 10){
        return Promise.resolve(10);
    }else{
        return Promise.reject(new Error("antrian habis"))
    }
}

const order = () => {
    console.log("order KFC paket A");
}

//call function
getNomorAntri(12)
.then(res => console.log(res))
.catch(error => console.error(error.toString));

order();