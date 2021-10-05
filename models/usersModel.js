// const { ObjectID } = require('mongodb');
const mongoConnection = require("./connection");

const findUser = async (_id, name) => {
  const usersCollection = await mongoConnection
    .connection()
    .then((db) => db.collection("users"));

  const user = await usersCollection.findOne(
    // { _id: ObjectID(id) },
    { name: name }
  );
  return { user };
};

module.exports = {
  findUser,
};
