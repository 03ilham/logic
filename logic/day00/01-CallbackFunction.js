function startEngine(){
    console.log("Engine start....");
}
function changeGear(gear){
    console.log('Masukan gigi ${gear} to move a car');
}
function goCar(){
    console.log("Mobil berjalan");
}
function stopACar(){
    console.log("Mobil berhenti....");
}
function shutDownEngine(){
    console.log("Mesin mobil di matikan");
}

//** call main function */
function driveACar(callBackfunction){
    callBackfunction();
    changeGear(1);
    goCar();
    stopACar();
    shutDownEngine();
}
driveACar(startEngine);

//calbck fuction with settimeout
//use settimout supaya ada delay callback
    function driveACarTimeOut(callBackfunction){

        setTimeout(() => {
            callBackfunction();
        }, 1000);
        setTimeout(() => {
            changeGear(1);
        }, 2000);
        setTimeout(() => {
            goCar();
        }, 3000);
        setTimeout(() => {
            stopACar();
        }, 4000);
        setTimeout(() => {
            shutDownEngine();
        }, 5000);
    }

//**call main function */
driveACarTimeOut(startEngine);