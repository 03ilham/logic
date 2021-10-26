function totalGaji(gaji1, gaji2, gaji3) {
  const gajiAndPajak1 = gaji1 * (2 / 100);
  const gajiAfterPajak1 = gaji1 + gajiAndPajak1;
  const gajiAndPajak2 = gaji2 * (5 / 100);
  const gajiAfterPajak2 = gaji2 + gajiAndPajak2;
  const gajiAndPajak3 = gaji3 * (10 / 100);
  const gajiAfterPajak3 = gaji3 + gajiAndPajak3;
  const total = gajiAfterPajak1 + gajiAfterPajak2 + gajiAfterPajak3;

  return `
    Total Gaji Yang Harus Di Bayar :
    Emp1   : Rp.${gaji1} + pajak(2%)  = Rp.${gajiAfterPajak1}
    Emp2   : Rp.${gaji2} + pajak(5%)  = Rp.${gajiAfterPajak2}
    Emp3   : Rp.${gaji3} + pajak(10%) = Rp.${gajiAfterPajak3}
    total  : Rp.${total}`;
}

console.log(totalGaji(500, 2000, 12000));
