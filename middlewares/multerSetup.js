const multer = require("multer");

const uploadWithMulter = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "uploads/");
    },
    filename: (req, file, callback) => {
      callback(null, Date.now() + "-" + file.originalname);
    },
  }),
});

module.exports = {
  uploadWithMulter,
};
