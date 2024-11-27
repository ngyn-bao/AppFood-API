import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/sequelize.connection.js";

const rate_res = sequelize.define(
  "rate_res",
  {
    user_id: {
      type: DataTypes.INTEGER,

      allowNull: false,
    },
    res_id: {
      type: DataTypes.INTEGER,

      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    date_res: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "rate_res",
    timestamps: false,
  }
);

rate_res.removeAttribute("id");

export default rate_res;
