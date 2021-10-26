//arrow function
//kita bisa buat function tanpa memakai keyword function bisa gunakan tanda panah
//arrow const akan di simpan dalam variabel

const startEngine = () => {
    console.log("Engine star....");
}
const changeGear= (gear)=> {
    console.log('Masukan gigi $(gear) to move a car');
}
const goCar = () => {
    console.log("Mobil berjalan");
}
const stopACar = () => {
    console.log("Mobil berhenti....");
}
const shutDownEngine = () => {
    console.log("Mesin mobil di matikan");
}

//** call main const */
const driveACar =  (callBackconst) => {
    callBackconst();
    changeGear(1);
    goCar();
    stopACar();
    shutDownEngine();
}
driveACar(startEngine);