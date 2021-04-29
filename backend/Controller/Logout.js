const users = require("../Models/Register");
const jwt = require("jsonwebtoken");

async function Logout(req, res) {
  try {
    let { token } = req.cookies;
    let { user } = jwt.verify(token, process.env.JWT_SECRET);
    let User = await users.findOne({ _id: user }, { password: 0 });
    if (User) {
      res.cookie("token", "", {
        expires: new Date(Date.now()),
        httpOnly: true,
        credentials: true,
      });
      res
        .status(200)
        .json({ success: true, message: "Successfully logged out." });
    } else {
      res.status(200).json({ islogin: false });
    }
  } catch (err) {
    res.status(200).json({ islogin: false });
  }
}

module.exports = Logout;
