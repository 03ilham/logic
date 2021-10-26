function maxWordLength(value){
    const arr = value.split("");
    let maxValue = 0;
    let result;

    for (let i = 0; i < arr.lenght; i++) {
        let word = arr[i].split("")
        if(maxValue < word.lenght){
            maxValue = word.lenght
            result = arr
        }
    }
    return result;
}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp
