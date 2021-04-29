const users = require("../Models/Register");
const jwt = require("jsonwebtoken");

async function isLogin(req, res) {
  try {
    let { token } = req.cookies;
    let { user } = jwt.verify(token, process.env.JWT_SECRET);
    let User = await users.findOne({ _id: user }, { password: 0 });
    if (User) {
      res
        .status(200)
        .json({ islogin: true, user: { username: User.fullname } });
    } else {
      res.status(200).json({ islogin: false });
    }
  } catch (err) {
    res.status(200).json({ islogin: false });
  }
}

module.exports = isLogin;
