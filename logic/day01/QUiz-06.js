function getCoordinat(x1,y1,x2,y2) {
    if(isNaN(x1) && isNaN(x2)){
        return `input kordinat dalamm angka`
    }
    const d = Math.sqrt(((x1-x2)**2) + ((y1-y2)**2))

    return d
}

console.log(getCoordinat(3,4,-4,-5)); //9
console.log(getCoordinat("1","2","-1","-2")); //1
console.log(getCoordinat("x","2","-y","-2")); //input kordinat dalam angka
console.log(getCoordinat(3.2,4.5,-4.4,-5)); //13.695801445917125
