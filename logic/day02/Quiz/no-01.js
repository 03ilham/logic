function strToDate(date) {
  let a = date;
  let arr = a.split(" ");
  let b = new Date(arr);

  if (isNaN(b)) {
    return `${date} bad format date`;
  }

  return b;
}

console.log(strToDate("12/15/2021"));
console.log(strToDate("12/aa/bb"));
