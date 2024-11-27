import like_res from "../models/like-res.model.js";
import { BadRequestError } from "../helper/handleError.js";

export const likeService = {
  getByUser: async function (req) {
    const user_id = req.params.id;

    const result = await like_res.findAll({
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

    const result = await like_res.findAll({
      where: {
        res_id: res_id,
      },
    });
    return {
      items: result || [],
    };
  },

  like: async function (req) {
    const { user_id, res_id } = req.body;

    if (!user_id || !res_id) throw new BadRequestError("Nhập sai dữ liệu!");

    const dataExist = await like_res.findOne({
      where: {
        user_id: user_id,
        res_id: res_id,
      },
    });

    if (dataExist) throw new BadRequestError("Đã like rồi!");
    // console.log(user_id, res_id);
    else {
      const newLike = await like_res.create({
        user_id: user_id,
        res_id: res_id,
      });
      return newLike;
    }
  },

  unlike: async function (req) {
    const { user_id, res_id } = req.body;

    if (!user_id || !res_id) throw new BadRequestError("Nhập sai dữ liệu!");
    const dataExist = await like_res.findOne({
      where: {
        user_id: user_id,
        res_id: res_id,
      },
    });

    if (dataExist) {
      const deleteData = await like_res.destroy({
        where: {
          user_id: user_id,
          res_id: res_id,
        },
      });
      return dataExist;
    } else throw Error("Không tìm thấy data!");
  },
};
