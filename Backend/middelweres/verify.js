const jwt = require("jsonwebtoken");

function verify(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ success: false, message: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, "secretkey"); // 🔐 secret should be in .env
    req.user = decoded; // attach user info to request
    next(); // move to next middleware / controller
  } catch (err) {
    return res.status(403).json({ success: false, message: "Invalid token" });
  }
}

module.exports = verify;
