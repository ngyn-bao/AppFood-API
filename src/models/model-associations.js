import foodType from "./food-type.model.js";
import food from "./food.model.js";
import like_res from "./like-res.model.js";
import order from "./order.model.js";
import rate_res from "./rate-res.model.js";
import restaurant from "./restaurent.model.js";
import subFood from "./subfood.model.js";
import user from "./user.model.js";

const defineAssociations = () => {
  // foodType and food
  foodType.hasMany(food, { foreignKey: "type_id" });
  food.belongsTo(foodType, { foreignKey: "type_id" });

  // user and like
  user.hasMany(like_res, { foreignKey: "user_id" });
  like_res.belongsTo(user, { foreignKey: "user_id" });

  // restaurant and like
  restaurant.hasMany(like_res, { foreignKey: "res_id" });
  like_res.belongsTo(restaurant, { foreignKey: "res_id" });

  // user and rate
  user.hasMany(rate_res, { foreignKey: "user_id" });
  rate_res.belongsTo(user, { foreignKey: "user_id" });

  // restaurant and rate
  restaurant.hasMany(rate_res, { foreignKey: "res_id" });
  rate_res.belongsTo(restaurant, { foreignKey: "res_id" });

  // user and order
  user.hasMany(order, { foreignKey: "user_id" });
  order.belongsTo(user, { foreignKey: "user_id" });

  // food and order
  food.hasMany(order, { foreignKey: "food_id" });
  order.belongsTo(food, { foreignKey: "food_id" });

  // food and subFood
  food.hasMany(subFood, { foreignKey: "food_id" });
  subFood.belongsTo(food, { foreignKey: "food_id" });
};

export default defineAssociations;
