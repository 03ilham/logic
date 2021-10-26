
function range(numbers) {
    let s = [];
    for (let i = 1; i <= numbers; i++) {
        s = s+[""]+i;
    }
    return s.split("");
    
}


console.log(range(9));
