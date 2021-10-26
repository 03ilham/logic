const array1 = ["Mangga","Apel","Melon","Pisang","Sirsak","Tomat","Nanas","Nangka","Timun","Mangga"]

const array2 = ["Bayam","Wortel","Kangkung","Mangga","Tomat","Kembang Kol","Nangka","Timun"]

const arr = [...array1,...array2]
for (let i = 0; i < arr; i++) {
    arr.sort()
    for (let j = 0; j < arr; j++) {
        console.log(j);   
    }      
}
