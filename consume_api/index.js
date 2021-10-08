const axios = require("axios");

const body = {
  username: "Axios Test",
  password: "Super Password",
};

const axiosTest = async () => {
  await axios
    .get("http://localhost:3000/")
    .then((response) => {
      console.log(response.data);
      console.log(response.status);
    })
    .catch((error) => {
      console.log(error);
    });

  await axios
    .post("http://localhost:3000/register", body)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

axiosTest();
