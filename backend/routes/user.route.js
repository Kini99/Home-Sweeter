const express = require("express");
const { UserModel } = require("../models/user.model");
const { BlacklistModel } = require("../models/token.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  try {
    const user = await UserModel.find();
    res.send(user);
  } catch (error) {
    res.send({ error: error });
  }
});
userRouter.post("/register", async (req, res) => {
  const { name, email, phone, gender, password } = req.body;

  const passwordReq =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordReq.test(password)) {
    return res.status(200).json({
      msg: "Invalid password format! Password format Should contain atleast one uppercase character, one number, special character and length greater then 8.",
    });
  }

  try {
    const existingUserEmail = await UserModel.findOne({ email });
    if (existingUserEmail) {
      return res.status(200).json({ msg: "User Already Exists!" });
    }
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.status(400).json({ error: err.messag });
      } else {
        const user = new UserModel({
          name,
          email,
          phone,
          gender,
          password: hash,
        });
        await user.save();
      }
    });
    res
      .status(200)
      .json({ msg: "Registration Successful!", registeredUser: req.body });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          var token = jwt.sign({ _id: user._id }, "sy", {
            expiresIn: 120,
          });
          var refreshToken = jwt.sign({ _id: user._id }, "masai", {
            expiresIn: "7d",
          });
          res.status(200).json({
            msg: "Login successful!",
            token: token,
            refreshToken: refreshToken,
          });
        }
      });
    } else {
      res.status(200).json({ msg: "User Not Found!" });
    }
  } catch (err) {
    return res.status(400).json({ error: err.messag });
  }
});

userRouter.get("/logout", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || null;
    if (token) {
      await BlacklistModel.updateMany({}, { $push: { blacklist: [token] } });
      res.status(200).json({ msg: "Logout Successful!" });
    }
  } catch (err) {
    res.status(400).json({ error: err.messag });
  }
});

userRouter.get("/refreshtoken", (req, res) => {
  const refreshToken = req.headers.authorization?.split(" ")[1];
  const decoded = jwt.verify(refreshToken, "masai");
  if (decoded) {
    let newToken = jwt.sign({ _id: decoded._id }, "sy", {
      expiresIn: 120,
    });
    res.status(200).json({ msg: "newToken", newToken });
  } else {
    res.status(400).json({ error: err.message });
  }
});

module.exports = {
  userRouter,
};
