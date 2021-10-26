function getAreaCyrcle(radius) {
  const pi = 3.14159;
  let area = pi * radius * radius;
    
    if (isNaN(radius)) {
        return `${radius} Inputan harus dalam angka`;
    }
    if (radius <= 0) {
        return `${radius} try higher `;
    }



  return area;
}


console.log(getAreaCyrcle(5));

console.log(getAreaCyrcle(`a`));

console.log(getAreaCyrcle(`-1`));


