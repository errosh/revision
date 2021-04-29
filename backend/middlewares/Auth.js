const users = require("../Models/Register");
const jwt = require("jsonwebtoken");

async function Auth(req, res, next) {
  try {
    let { token } = req.cookies;
    let { user } = jwt.verify(token, process.env.JWT_SECRET);
    let User = await users.findOne({ _id: user }, { password: 0 });
    if (User) {
      req.loginuser = User._id;
      req.loginusernamee = User.fullname;
      next();
    } else {
      res.status(401).json({ islogin: false });
    }
  } catch (err) {
    res.status(401).json({ islogin: false });
  }
}

module.exports = Auth;
