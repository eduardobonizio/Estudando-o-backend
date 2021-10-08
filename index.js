const express = require("express");
const multer = require("multer");
const cors = require("cors");
const Login = require("./controller/login");
const Register = require("./controller/register");
const Auth = require("./middlewares/auth");
const UserInfo = require("./controller/userInfo");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Define a pasta pública */
/* __dirname + '/uploads' é o caminho da pasta que será exposta publicamente */
/* Isso quer dizer que, sempre que receber uma request, o express vai primeiro
verificar se o caminho da request é o nome de um arquivo que existe em `uploads`.
Se for, o express envia o conteúdo desse arquivo e encerra a response. */
app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", (_request, response) => {
  response.status(200).send("Ok");
});

const upload = multer({ dest: "uploads" });

app.get("/users/me", Auth, UserInfo);

app.post("/login", Login);

app.post("/register", Register);

/*"File" deve ser o mesmo nome do campo que está mandando o arquivo
<form action="/post" method="post" enctype="multipart/form-data">
  <input type="file" name="file" />
</form>
*/
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json({ body: req.body, file: req.file });
});

app.listen(PORT, () => {
  console.log("Online");
});
