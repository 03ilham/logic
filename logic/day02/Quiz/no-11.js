function isPermute(value1, value2) {
  let a = value1.split("");
  let b = value2.split("");
  let c = a.sort();
  let d = b.sort();

  for (let i = 0; i < c.length; i++) {
    if (c[i] !== d[i]) {
      return false;
    }
  }
  return true;
}

console.log(isPermute("aba", "baa"));
console.log(isPermute("aba", "aaba"));
