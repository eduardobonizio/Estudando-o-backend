const axios = require("axios");
const fs = require("fs");
const formData = require("form-data");

const axiosTest = async () => {
  const body = {
    username: "Axios Test",
    password: "Super Password",
  };

  await axios
    .get("http://localhost:3000/")
    .then((response) => {
      console.log("axiosTest method get response.status", response.status);
      console.log("axiosTest method get response.data", response.data);
    })
    .catch((error) => {
      console.log(error);
    });

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

const postFileWithAxios = async () => {
  const stream = fs.createReadStream("./consume_api/sample.txt");

  const form = new formData();

  form.append("file", stream);

  const formHeaders = form.getHeaders();

  await axios
    .post("http://localhost:3000/upload", form, {
      headers: {
        ...formHeaders,
      },
    })
    .then((response) => {
      console.log(
        "postFileWithAxios method post response.status",
        response.status
      );
      console.log("postFileWithAxios method post response.data", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const runAll = async () => {
  await axiosTest();

  await postFileWithAxios();
};

runAll();
