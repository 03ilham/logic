function segitiga(a, b) {
  let s = "";
  for (let i = 0; i < b; i++) {
    for (let j = 0; j < i; j++) {
      s += i + j + a;
    }
    s += "\n";
  }
  return s;
}
console.log(segitiga(4, 8));
console.log(segitiga(0, 8));

