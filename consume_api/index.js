const axiosGet = require("./axiosGet");
const axiosPut = require("./axiosPut");
const axiosPutFormData = require("./axiosPutFormData");

const runAll = async () => {
  await axiosGet();
  console.log("--------------------------------------------------");
  await axiosPut();
  console.log("--------------------------------------------------");
  await axiosPutFormData();
};

runAll();
