function getHeavir(w1, w2, w3) {
  let max = w1;

  if (w2 > max) {
    max = w2;
  }

  if (w3 > max) {
    max = w3;
  }

  return max;
}

console.log(getHeavir(12, 100, 70));

console.log(getHeavir(10, 12, 45));
