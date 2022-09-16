const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput(emosi)
  .then((marah) => {
    console.log(marah);
  })
  .catch((tidakMarah) => {
    console.log("err", tidakMarah);
  });


module.exports = {
  promiseOutput,
};
