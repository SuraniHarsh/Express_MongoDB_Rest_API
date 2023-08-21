const express = require("express");
const { getCurrentUser, registerUser, loginUser } = require("../controllers/userController");
const route = express.Router();

route.route("/register").post(registerUser);
route.route("/login").post(loginUser);
route.route("/current").get(getCurrentUser);

module.exports = route;