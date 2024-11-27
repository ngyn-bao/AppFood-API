import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/sequelize.connection.js";

const restaurant = sequelize.define(
  "restaurant",
  {
    res_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    res_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    desc: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: "restaurant",
    timestamps: false,
  }
);

export default restaurant;
