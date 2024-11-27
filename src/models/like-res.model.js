import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/sequelize.connection.js";

const like_res = sequelize.define(
  "like_res",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    res_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date_like: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "like_res",
    timestamps: false,
  }
);

like_res.removeAttribute("id");

export default like_res;
