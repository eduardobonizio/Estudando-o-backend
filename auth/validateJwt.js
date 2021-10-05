const jwt = require("jsonwebtoken");
const UsersModel = require("../models/usersModel");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Token não encontrado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);

    const user = UsersModel.findUser(decoded.data.username);

    if (!user)
      return res.status(401).json({
        message: "Não foi possível encontrar usuário informado no token",
      });

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};
