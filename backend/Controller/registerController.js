const users = require("../Models/Register");
const bcrypt = require("bcryptjs");

async function registerController(req, res) {
  try {
    let { fullname, email, password } = req.body;

    password = await bcrypt.hash(password, 10);

    let newUser = {
      fullname,
      email,
      password,
    };
    let result = await users.create(newUser);
    res
      .status(200)
      .json({ success: true, message: "User registered successfully." });
  } catch (err) {
    if (err.code === 11000) {
      err.message = "Duplicate entry exists!";
    }
    res.status(422).json({ success: false, message: err.message });
  }
}

module.exports = registerController;
