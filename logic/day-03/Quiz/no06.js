const cities = ["merak", "tangerang", "jakarta", "bogor", "cianjur", "cimahi", "bandung"];
function citiesSlice(arrays,cityBeetwen){
    const getIndex = arrays.indexOf(cityBeetwen);
    const splice = arrays.splice(getIndex,1)

 return arrays;
}




console.log(citiesSlice(cities,"bogor")); //['merak', 'tangerang', 'jakarta', 'cianjur', 'cimahi', 'bandung']
console.log(citiesSlice(cities,"jakarta"));//['merak', 'tangerang', 'bogor', 'cianjur', 'cimahi', 'bandung’]
