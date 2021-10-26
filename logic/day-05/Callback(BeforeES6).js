// callback script code
const callCenter147 = () => {
  pesan("Selmat Datang Di Layanan Telkom 147", () => {
    pesan("Pilih angka 1 untuk indonesia", () => {
      pesan("Tekan angka 1 untuk pendaftaran", () => {
        pesan("Tekan angka 2 untuk keluhan", () => {
          pesan("Tekan 3 untuk membatalkan", () => {});
        });
      });
    });
  });
};

/**function pesan di parameter ke dua memanggil data type
 * function. JS secara otomatis akan memmperlaukan
 * sebagai task function asyncronoush.
 */
const pesan = (message, callback) => {
  setTimeout(() => {
    console.log(message);
    callback();
  }, 2000);
};

//call function
callCenter147();
