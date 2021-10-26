function tagihanKomik(tglPinjam, tglKembali, jumlah) {
  const startDate = new Date(tglPinjam);
  const endDate = new Date(tglKembali);
  const sewa = 2500;
  const totalDay = endDate - startDate;
  const milliSecondPerDay = 1000 * 60 * 60 * 24;
  const countDay = totalDay / milliSecondPerDay;
  const jumlahTagihan = jumlah * sewa * countDay;

  if (isNaN(startDate) && isNaN(endDate)) {
    return `tgl.pinjam ${tglPinjam} & tgl.kembali ${tglKembali} not valid formated date`;
  }

  if (isNaN(startDate)) {
    return `tgl.pinjam ${tglPinjam} not valid formated date`;
  }

  if (isNaN(endDate)) {
    return `tgl.kembali ${tglKembali} not valid formated date`;
  }
  if (jumlah > 10) {
    return `maksimal peminjaman 10 komik `
  }

  return `
    total hari = ${countDay} hari
    total komik = ${jumlah} komik x Rp.${sewa},00/komik
    ----------------------------------
    total tagihan = Rp.${jumlahTagihan},00 `;
}

console.log(tagihanKomik("09-03-xx", "09-06-2021", 4));

console.log(tagihanKomik("09-03-2021", "09-06-mm", 4));

console.log(tagihanKomik("09-03-xx", "09-06-mm", 4));

console.log(tagihanKomik("09-03-2021", "09-06-2021", 4));

console.log(tagihanKomik("09-03-2021", "09-06-2021", 11));

