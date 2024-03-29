const fruitNamesA = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesB = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesC = ["anggur", "apel", "mangga", "alpukat"];

function areaArrayEqual(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  } else if (array1 === array2) {
    return true;
  } else if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }

  return true;
}

console.log(areaArrayEqual(fruitNamesA, fruitNamesB));
console.log(areaArrayEqual(fruitNamesA, fruitNamesC));
