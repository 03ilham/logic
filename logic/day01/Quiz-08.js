function elapsedTIme(getPeriodTimes) {
  let hari, jam, menit, detik,sisa;

  if (isNaN(getPeriodTimes)) {
    return `${getPeriodTimes}  is not a number`;
  }

  hari = parseInt(getPeriodTimes / 86400);
  sisa = getPeriodTimes % 86400;

  jam = parseInt(sisa / 3600);
  sisa = sisa % 3600;

  menit = parseInt(sisa / 60);
  sisa = sisa % 60;

  detik = sisa;

  return `getPeriodTime = 
    satuan ${hari} hari, 
    satuan ${jam} jam, 
    puluhan ${menit} menit, 
    puluhan ${detik} detik`;
}

console.log(elapsedTIme(900005));

console.log(elapsedTIme("700005A"));

console.log(elapsedTIme("700005"));
