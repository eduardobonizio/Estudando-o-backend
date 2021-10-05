module.exports = async (req, res) => {
  try {
    const {
      userData: { user, admin },
    } = req;

    return res.status(200).json({ username: user.username, admin });
  } catch (e) {
    return res.status(500).json({ message: "Erro interno", error: e });
  }
};
