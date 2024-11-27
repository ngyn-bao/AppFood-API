import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/sequelize.connection.js";
import food from "./food.model.js";
import user from "./user.model.js";

const order = sequelize.define(
  "order",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    food_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    arr_sub_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "order",
    timestamps: false,
  }
);

order.removeAttribute("id");

export default order;
