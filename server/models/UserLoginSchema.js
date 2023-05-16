const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserLoginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const UserLogin = new mongoose.model("UserLogin", UserLoginSchema);
module.exports = UserLogin;
