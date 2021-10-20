const UsersService = require("../services/usersService");

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res
        .status(401)
        .json({ message: "Usuário e senha não podem estar vazios" });

    const { status, message } = await UsersService.createNewUser(
      username,
      password
    );

    return res.status(status).json({ message });
  } catch (e) {
    return res.status(500).json({ message: "Erro interno", error: e });
  }
};
