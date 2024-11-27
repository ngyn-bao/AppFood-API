import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/sequelize.connection.js";
import foodType from "./food-type.model.js";

const food = sequelize.define(
  "food",
  {
    food_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    food_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    desc: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    type_id: {
      type: DataTypes.INTEGER,

      allowNull: false,
    },
  },
  {
    tableName: "food",
    timestamps: false,
  }
);

export default food;
