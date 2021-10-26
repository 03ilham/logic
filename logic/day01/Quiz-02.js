function calculateDistance(a, t) {
  const s = (1 / 2) * a * t * t;
  
  if (isNaN(a, t)) {
    return `${a} ${t} input must an number`;
  }

  if (a <= 0 && t <= 0) {
    return `${a}/${t} Acceleratin or time must be > 0`;
  }

  
  return `jarak yang di tempuh adalah ${s} meter/s`;
}

console.log(calculateDistance(50, 80));

console.log(calculateDistance("a", "t"));

console.log(calculateDistance(-1, 0));
