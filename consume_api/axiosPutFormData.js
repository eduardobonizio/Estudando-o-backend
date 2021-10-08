const axios = require("axios");
const fs = require("fs");
const formData = require("form-data");

const axiosPostFormData = async () => {
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

module.exports = axiosPostFormData;
