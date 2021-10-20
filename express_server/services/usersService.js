const UsersModel = require("../models/usersModel");

const createNewUser = async (username, password) => {
  const user = UsersModel.findUser(username);

  if (user)
    return {
      status: 409,
      message: "Usuário já cadastrado",
    };

  await UsersModel.createUser(username, password);

  return {
    status: 201,
    message: "Usuário criado com sucesso",
  };
};

module.exports = {
  createNewUser,
};
