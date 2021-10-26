function percentage(partialValue, totalValue) {
  const a = (totalValue * 100) / partialValue;
  const b = Math.floor(a - 100);

  if (b >= 0) {
    return `total kenaikan income ${b}%`;
  } else if (b < 0) {
    return `total penurunan income ${b}%`;
  } else {
    return `${partialValue} ${totalValue} or harus dalam angka`;
  }
}
console.log(percentage(600000, 1000000));

console.log(percentage(500000, 300000));

console.log(percentage("abc", "bca"));
