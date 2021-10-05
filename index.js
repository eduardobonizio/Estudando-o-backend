const express = require("express");
const bodyParser = require("body-parser");
const Login = require("./controller/login");
const Register = require("./controller/register");
const Auth = require("./middlewares/auth");
const UserInfo = require("./controller/userInfo");

require("dotenv").config();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.get("/", (_request, response) => {
  response.status(200).send("Ok");
});

app.get("/users/me", Auth, UserInfo);

app.post("/login", Login);

app.post("/register", Register);

app.listen(PORT, () => {
  console.log("Online");
});
