//segitiga 1
function segitiga(a, b) {
  let n = " ";
  for (let i = 0; i < b; i++) {
    for (let k = 0; k < i; k++) {
      n += i + k + a;
    }
    n += "\n";
  }
  return n;
}

console.log(segitiga(1, 9));

//seigtiga 2
for (let i = 0; i < 8; i++) {
  let s = "";
  for (let n = 8; n > i; n--) {
    s = n - i + " " + s;
  }
  console.log(s.replace("0", " "));
}

//segitiga 3
for (let i = 0; i < 8; i++) {
  let b = " ";
  for (let m = i; m <= 8; m++) {
    b = m - i + " " + b;
  }
  console.log(b.replace("0", " "));
}
