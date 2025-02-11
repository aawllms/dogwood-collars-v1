import bcrypt from "bcrypt";
import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js"; // Import sequelize connection from index.js

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Ensure emails are unique
      validate: {
        isEmail: true, // Validate email format
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        const saltRounds = 10;
        this.password = await bcrypt.hash(password, saltRounds);
      },
      beforeUpdate: async (user) => {
        const saltRounds = 10;
        this.password = await bcrypt.hash(password, saltRounds);
      },
    },
  }
);

export default User;
