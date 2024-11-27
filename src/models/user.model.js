import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/sequelize.connection.js";
import likeRes from "./like-res.model.js";

const user = sequelize.define(
  "user",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: "user",
    timestamps: false,
  }
);

export default user;
