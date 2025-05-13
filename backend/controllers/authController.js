const User = require("../models/User");
const jwt = require("jsonwebtoken");

const generateToken = (res, userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

exports.register = async (req, res) => {
  const { email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: "User exists" });
  const user = await User.create({ email, password });
  generateToken(res, user._id);
  res.status(201).json({ email: user.email });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  generateToken(res, user._id);
  res.status(200).json({ email: user.email });
};

exports.logout = (req, res) => {
  res.cookie("token", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: "Logged out" });
};

exports.getMe = (req, res) => {
  res.status(200).json({ id: req.user.id });
};