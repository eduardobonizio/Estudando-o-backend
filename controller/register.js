const UsersModel = require("../models/usersModel");

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res
        .status(401)
        .json({ message: "Usuário e senha não podem estar vazios" });

    await UsersModel.createUser(username, password);

    return res.status(200).json({ message: "Usuário criado com sucesso" });
  } catch (e) {
    return res.status(500).json({ message: "Erro interno", error: e });
  }
};
