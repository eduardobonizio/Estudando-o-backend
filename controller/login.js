const jwt = require("jsonwebtoken");
const UserModel = require("../models/usersModel");

// eslint-disable-next-line no-undef
const secret = process.env.SECRET;

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res
        .status(401)
        .json({ message: "Informe usuário e senha para realizar o login" });

    const user = await UserModel.findUser(username);

    if (!user || password !== user.password)
      return res
        .status(401)
        .json({ message: "Usuário não existe ou senha inválida" });

    const jwtConfig = {
      expiresIn: "1h",
      algorithm: "HS256",
    };

    const payLoad = { data: user, admin: false };

    if (user.username == "admin" && user.password == "s3nh4S3gur4???")
      payLoad.admin = true;

    const token = jwt.sign(payLoad, secret, jwtConfig);

    return res.status(200).json({ token });
  } catch (e) {
    return res.status(500).json({ message: "Erro interno", error: e });
  }
};
