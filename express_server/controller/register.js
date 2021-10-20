const UsersService = require("../services/usersService");

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res
        .status(401)
        .json({ message: "Usuário e senha não podem estar vazios" });

    const respose = await UsersService.createNewUser(username, password);

    return res.status(respose.status).json(respose.message);
  } catch (e) {
    return res.status(500).json({ message: "Erro interno", error: e });
  }
};
