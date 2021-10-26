function getSalesTax(price, tax) {
  if (isNaN(price) && isNaN(tax)) {
    return `${price} & ${tax}, price dan pajak harus dalam angka`;
  }

  if (isNaN(price)) {
    return `${price} price harus dalam angka `;
  }

  if (isNaN(tax)) {
    return `${tax}, pajak harus dalam angka`;
  }

  

  const salesTax = price * (tax / 100);
  const totalSales = price + salesTax;

  return `
    Total Sales      : Rp.${price}
    Pajak            : ${tax}%
    TotalHarga+Pajak : Rp.${totalSales}`;
}

console.log(getSalesTax("a", 1));

console.log(getSalesTax(500, "pajak"));

console.log(getSalesTax("harga", "pajak"));

console.log(getSalesTax(4500, 5));
