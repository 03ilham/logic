//anonymous function
//functon tidak bernama,biasnya hanya di gunakan sekali pakai atau tidak reusable

function driveACar(){

    setTimeout(function (){
        console.log("Engine start....");
    }, 1000);
    setTimeout(function (){
        console.log('Maskan gigi 1 to move a car');
    }, 2000);
    setTimeout(function (){
        console.log("Mobil berjalan");
    }, 3000);
    setTimeout(function (){
        console.log("Mobil berhrnti....");
    }, 4000);
}

//** call mamin function */
driveACar();