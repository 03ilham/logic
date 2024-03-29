const getNomorAntri = (nomor) => {
  return nomor;
};

const pilihPaket = (nomor, paket) => {
  if (nomor <= 0 && isNaN(nomor)) {
    return "silahkan antri";
  }
  if (paket === "A") {
    return "KFC paket A";
  } else {
    return "KFC paket B";
  }
};

const tagihan = (paket) => {
  if (paket === "A") {
    return 25000;
  } else {
    return 24000;
  }
}

const orderKFC = async(paket)=>{
    const nomorAntri = await getNomorAntri(10);
    const menu = await pilihPaket(nomorAntri,paket);
    const total = await tagihan(menu);
    return [nomorAntri,menu,total];
}

// call order kfc
orderKFC("A").then(res => console.log(res));

