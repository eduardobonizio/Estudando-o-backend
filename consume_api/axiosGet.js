const axios = require("axios");

const axiosGet = async () => {
  await axios
    .get("http://localhost:3000/")
    .then((response) => {
      console.log("axiosTest method get response.status", response.status);
      console.log("axiosTest method get response.data", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = axiosGet;
