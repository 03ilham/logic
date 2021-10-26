function convertToRupiah(value, curencyType) {
  const yen = 130.0;
  const dollar = 14.281;
  const euro = 16.848;

  let rupiah;

  if (curencyType === "yen") {
    rupiah = value * yen;
  } else if (curencyType === "dollar") {
    rupiah = value * dollar;
  } else if (curencyType === "euro") {
    rupiah = value * euro;
  } else {
    return "no math type curency";
  }
  
  return ` ${value} ${curencyType} = Rp.${Math.round(rupiah)}`;
}

console.log(convertToRupiah(1000, "yen"));

console.log(convertToRupiah(100, "dollar"));

console.log(convertToRupiah(100, "euro"));

console.log(convertToRupiah(100, ""));
