import db from "../config/database.js";
import { DataTypes } from "sequelize";

const User = db.define("user", {
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  token: {
    type: DataTypes.STRING,
  },
});

export default User;
