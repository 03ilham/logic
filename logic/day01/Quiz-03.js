function fareinheitToKelvin(suhu) {
  const kelvin = (suhu + 459.67) / 1.8;

  if (isNaN(suhu)) {
    return ` ${suhu} Fareinheit must a number`;
  }

  return `Converet Fahrenheit ${suhu} to kelvin = ${Math.round(kelvin)} kelvin `
}

console.log(fareinheitToKelvin(45));

console.log(fareinheitToKelvin("1"));

console.log(fareinheitToKelvin("f"));
