// scope variable const

const metodekirim = "regular"
let typekirim = "regular"
typekirim = "kilat"

//***dont use it*/

console.log(typekirim);


function scope1(){
    var top = "top";

}
 






function scope2(print) {
    if (print) {
        var insideIF = 15;
    }
    console.log(insideIf);
}





 var s = "bottcamp";
 function scope5(print){
     if(print){
         var s = "codeid"
     }
     s = "codeid academy"
     console.log(s);
 }


 
 function scope6(print){
     if(print){
         let s = "codeid"
         console.log(s);
     }
     console.log(s);
 }
 console.log(scope6(true));


