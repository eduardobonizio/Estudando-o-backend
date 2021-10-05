// const { ObjectID } = require('mongodb');
// { _id: ObjectID(id) }
const mongoConnection = require("./connection");

const findUser = async (username) => {
  const usersCollection = await mongoConnection
    .connection()
    .then((db) => db.collection("users"));

  const user = await usersCollection.findOne({ username: username });
  return user;
};

const createUser = async (username, password) => {
  const usersCollection = await mongoConnection
    .connection()
    .then((db) => db.collection("users"));

  const user = await usersCollection.insertOne({
    username: username,
    password: password,
  });

  return user;
};

module.exports = {
  findUser,
  createUser,
};
