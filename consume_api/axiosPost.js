const axios = require("axios");

const axiosPut = async () => {
  const body = {
    username: "Axios Test",
    password: "Super Password",
  };

  await axios
    .post("http://localhost:3000/register", body)
    .then((response) => {
      console.log("axiosTest method post response.status", response.status);
      console.log("axiosTest method post response.data", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = axiosPut;
