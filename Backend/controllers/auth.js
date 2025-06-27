const jwt = require("jsonwebtoken");
const { Login } = require("../models/auth");
const { Signup } = require("../models/auth");


const signup = async (req, res) => {
  try {
    const newUser = new Signup({ ...req.body });
    const savedUser = await newUser.save();

    res.status(200).json({
      success: true,
      user: {
        _id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
      }
    });

  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ success: false, error: "Signup failed" });
  }
};


const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Find user
    const user = await Signup.findOne({ email, password });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // 2. Generate JWT token
    const token = jwt.sign(
      { _id: user._id, email: user.email , name:user.name},
      "secretkey", // 🔐 use env file in production
      { expiresIn: "7d" }
    );

    // 3. Send token in HttpOnly cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // ✅ true if using https
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // 4. Send response
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ success: false, error: "Login failed" });
  }
};


module.exports = { login };


module.exports = { signup ,login};