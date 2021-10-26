function totalLompat(x, y, k) {
  const lompat = (y - x) / k;

  return Math.round(lompat);
}

console.log(totalLompat(10, 85, 30));
