const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const emosi = true;

const promiseOutput = new Promise((resolve, reject) => {
  if (emosi) {
    const membuatMarah = "Marah";
    resolve(membuatMarah);
  } else {
    const tidakMarah = "tidak marah";
    reject(tidakMarah);
  }
});

promiseOutput.then((ok) => console.log(ok)).catch((fail) => console.log(fail));

  
module.exports = {
  promiseOutput,
};
