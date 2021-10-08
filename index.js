const express = require("express");
const Login = require("./controller/login");
const Register = require("./controller/register");
const Auth = require("./middlewares/auth");
const UserInfo = require("./controller/userInfo");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/", (_request, response) => {
  response.status(200).send("Ok");
});

app.get("/users/me", Auth, UserInfo);

app.post("/login", Login);

app.post("/register", Register);

app.listen(PORT, () => {
  console.log("Online");
});
