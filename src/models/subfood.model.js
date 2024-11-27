import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/sequelize.connection.js";
import food from "./food.model.js";

const subFood = sequelize.define(
  "subFood",
  {
    sub_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    sub_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    sub_price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    food_id: {
      type: DataTypes.INTEGER,

      allowNull: false,
    },
  },
  {
    tableName: "sub_food",
    timestamps: false,
  }
);

export default subFood;
