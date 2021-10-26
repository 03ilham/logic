function isCharsUnique(value){
    const arr = value.split("");
    const ar = arr.sort();
    for (let i = 0; i < ar.length; i++) {
        if(ar[i] === ar[i+1]){
            return false;
        }
        return true;
    }
}


console.log(isCharsUnique('abcdefg'));
console.log(isCharsUnique('abcdefga'));