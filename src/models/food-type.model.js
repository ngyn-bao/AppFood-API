import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/sequelize.connection.js";

const foodType = sequelize.define(
  "foodType",
  {
    type_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    type_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: "food_type",
    timestamps: false,
  }
);

export default foodType;
