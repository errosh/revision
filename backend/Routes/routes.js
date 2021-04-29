const express = require("express");
const router = express.Router();
const registerController = require("../Controller/registerController");
const loginController = require("../Controller/loginController");
const isLogin = require("../Controller/isLogin");
const Logout = require("../Controller/Logout");

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/islogin", isLogin);
router.get("/logout", Logout);

module.exports = router;
