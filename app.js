import express from "express";
import dotenv from "dotenv";
import User from "./model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();

dotenv.config();

app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    // check validate user input
    if (!(first_name && last_name && email && password)) {
      res.status(400).json({ msg: "Please fill all fields" });
    }

    // check if user already exist
    const userExist = await User.findOne({ where: { email: email } });

    if (userExist) {
      res.status(400).json({ msg: "User already exist" });
    }

    // encrypt user password
    const encryptPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await User.create({
      first_name,
      last_name,
      email,
      password: encryptPassword,
    });

    // create token
    const token = jwt.sign({ user_id: user_id, email }, process.env.TOKEN_KEY, {
      expiresIn: "2h",
    });

    // save user token
    user.token = token;

    // send response
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
});

export default app;
