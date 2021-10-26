/** Display year is kabisat and display month */

function getDays(month,year){
    if(isNaN(month) && isNaN(year)){
        return `inputan bulan & thaun harus dalam integer`
    }else if(isNaN(month)){
        return `inputan bulan harus dalam integer`
    }else if (isNaN(year)){
        return `inputan tahun harus dalam integer`
    }

    if (month < 1 && month >12){
        return `Inputan bulan antara 1 & 12`
    }

    if (month === 2){
        if(year % 4 === 0 && year %100 !== 0 || year %400 === 0){
            return `This month has 29 days`
        }else{
            return `This month has 28 hari`
        }
    }else if ( month === 4 || month === 6 || month === 9 || month === 11){
        return `This month has 30 hari`
    }else{
        return `This month has 31 hari`
    }

}

console.log(getDays("a",2021)); //inputan bulan harus dalam integer
console.log(getDays("2","year")); //inputan tahun harus dalam integer
console.log(getDays("m","year"));//inputan bulan & tahun harus dalam integer
console.log(getDays(2,2005)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(4,0)); //This month has 31 hari