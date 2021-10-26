const dates = [new Date(2021, 10, 20), new Date(2019, 3, 12),new Date(2020, 5, 23), new Date(2022, 3, 18)];
function matchingDate(tanggal,year){
    for (let i = 0; i < tanggal.length; i++) {
        if(year === tanggal[i].getFullYear()){
            return tanggal[i];
        } 
    }
}

console.log(matchingDate(dates,2021)); 

