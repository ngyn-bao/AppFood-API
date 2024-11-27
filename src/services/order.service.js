import { BadRequestError } from "../helper/handleError.js";
import order from "../models/order.model.js";

export const orderService = {
  order: async function (req) {
    const { user_id, food_id, amount, code, arr_sub_id } = req.body;

    if (!user_id || !food_id) throw new BadRequestError("Nhập sai dữ liệu!");
    // console.log(user_id, res_id);

    const newOrder = await order.create({
      user_id: user_id,
      food_id: food_id,
      amount: amount || 0,
      code: code || "",
      arr_sub_id: arr_sub_id || "",
    });
    return newOrder;
  },
};
