function getSalesDiscont(price, discount, tax) {
  if (isNaN(price) && isNaN(discount) && isNaN(tax)) {
    return `${price}/${discount}/${tax} price, tax, & discoount harus dalam angka`;
  }

  if (isNaN(price)) {
    return `${price} price harus dalam angka`;
  }

  if (isNaN(tax)) {
    return `${tax} pajak harus dalam angka`;
  }

  const salesDiscount = price * (discount / 100);
  const afterDiscount = price - salesDiscount;
  const salesTax = afterDiscount * (tax / 100);
  const totalSales = afterDiscount + salesTax;

  return `
    Total Sales         : Rp.${price}
    Discount (5%)       : Rp.${salesDiscount}
    PriceAfterDiskon    : Rp.${afterDiscount}
    Pajak (10%)         : Rp.${salesTax}
    _______________________________
    TotalPayment        : Rp.${totalSales}`;
}

console.log(getSalesDiscont("a", 1, 5));

console.log(getSalesDiscont(500, 5, "pajak"));

console.log(getSalesDiscont("harga", "discount", "pajak"));

console.log(getSalesDiscont(4500, 5, 10));
