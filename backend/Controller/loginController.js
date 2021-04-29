const users = require("../Models/Register");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
async function loginController(req, res) {
  try {
    let { email, password } = req.body;
    let User = await users.findOne({ email: email });

    let AuthCheck = await bcrypt.compare(password, User.password);

    if (AuthCheck) {
      let accessToken = jwt.sign({ user: User._id }, process.env.JWT_SECRET);
      res.cookie("token", accessToken, {
        expires: new Date(253402300000000),
        httpOnly: true,
        credentials: true,
      });
      res.status(200).json({ success: true, access_token: accessToken });
    } else {
      res.status(401).json({ success: false, message: "Unauthorized" });
    }
  } catch (err) {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
}

module.exports = loginController;
