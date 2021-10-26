function findSum(array, value){
    const a = array.sort()
    for (let i = 1; i < a.length; i++) {
        if(array.length + array.length === value){
            return array.length + array.length;
        }
        
    }
}

console.log(findSum([1,2,3,4,5],9));