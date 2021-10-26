function payment(tglBayar, tglJatuhTempo, jumlahCiclan) {
  const angsuran = 3500000;
  const startDate = new Date(tglBayar);
  const endDate = new Date(tglJatuhTempo);
  const totalDay = startDate - endDate;
  const milliSecondPerDay = 1000 * 60 * 60 * 24;
  const countDay = totalDay / milliSecondPerDay;
  const denda = ((countDay * 2) / 1000) * angsuran;

  if (jumlahCiclan < angsuran) {
    return `Angsuran anda kurang dari Rp.${angsuran} silahkan isi sesuai angsuran`;
  }

  if (startDate < endDate) {
    return `Tagihan bulan ${startDate.getMonth() + 1} belum tersedia `;
  }

  return `
    ----------------------------------------------------------
    Tanggal bayar              : ${new Intl.DateTimeFormat("id-ID").format(
      startDate
    )}
    Tanggal jatuh tempo        : ${new Intl.DateTimeFormat("id-ID").format(
      endDate
    )}
    ----------------------------------------------------------
    Tagihan bulan ${
      startDate.getMonth() + 1
    },${startDate.getFullYear()}       = Rp.${angsuran}
    Denda                      = Rp.${denda} (terlambat ${countDay} hari)
    Total                      = Rp.${angsuran + denda} lunas
    ----------------------------------------------------------
    Kwitansi ini sebagiai alat bukti pembayaran`;
}

console.log(payment("09/27/2021", "09/27/2021", 3500000));
console.log(payment("09/21/2021", "09/27/2021", 3500000));
console.log(payment("09/21/2021", "09/27/2021", 500000));
console.log(payment("09/29/2021", "09/27/2021", 3500000));
