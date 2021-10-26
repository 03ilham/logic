
for (let i = 0; i < 8; i++) {
    let r = " ";
    for (let j = 8; j > i; j--) {
       r = j - i +" "+r;   
    }
    console.log(r.replace("0"," "));   
}


for (let i = 0; i < 8; i++) {
    let r = " ";
    for (let j = i; j < 8; j++) {
       r = j - i +" "+r;   
    }
    console.log(r.replace("0"," "));   
}



    






