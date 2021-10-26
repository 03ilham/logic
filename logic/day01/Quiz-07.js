function sumDigit(n) {
  let ribuan, ratusan, puluhan, satuan,sisa;

  if (isNaN(n)) {
    return `${n} is not a number, try again.....`;
  }

  if (n > 10000) {
    return `${n} harus lebih kecil dari 10000`;
  }

  ribuan = parseInt(n / 1000);
  sisa = n % 1000;

  ratusan = parseInt(sisa / 100);
  sisa = sisa % 100;

  puluhan = parseInt(sisa / 10);
  satuan = sisa % 10;

  return ribuan + ratusan + puluhan + satuan;
}

console.log(sumDigit(1234));

console.log(sumDigit("5465"));

console.log(sumDigit("a123"));

console.log(sumDigit("23456"));
