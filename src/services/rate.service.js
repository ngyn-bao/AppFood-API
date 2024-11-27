import { BadRequestError } from "../helper/handleError.js";
import rate_res from "../models/rate-res.model.js";

export const rateService = {
  getByUser: async function (req) {
    const user_id = req.params.id;

    const result = await rate_res.findAll({
      where: {
        user_id: user_id,
      },
    });
    return {
      items: result || [],
    };
  },

  getByRes: async function (req) {
    const res_id = req.params.id;

    const result = await rate_res.findAll({
      where: {
        res_id: res_id,
      },
    });
    return {
      items: result || [],
    };
  },

  uploadRate: async function (req) {
    const { user_id, res_id, amount } = req.body;

    if (!user_id || !res_id) throw new BadRequestError("Nhập sai dữ liệu!");

    const dataExist = await rate_res.findOne({
      where: {
        user_id: user_id,
        res_id: res_id,
      },
    });

    if (dataExist) throw new BadRequestError("Đã rate rồi!");
    // console.log(user_id, res_id);
    else {
      const newRate = await rate_res.create({
        user_id: user_id,
        res_id: res_id,
        amount: amount || 0,
      });
      return newRate;
    }
  },
};
