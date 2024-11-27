import { handleSuccessResponse } from "../helper/handleResponse.js";
import { likeService } from "../services/like.service.js";

export const likeController = {
  getByUser: async function (req, res, next) {
    try {
      const result = await likeService.getByUser(req);
      const response = handleSuccessResponse(
        `Lấy danh sách theo user thành công`,
        undefined,
        result
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  getByRes: async function (req, res, next) {
    try {
      const result = await likeService.getByRes(req);
      const response = handleSuccessResponse(
        `Lấy danh sách theo nhà hàng thành công`,
        undefined,
        result
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  like: async function (req, res, next) {
    try {
      const result = await likeService.like(req);
      const response = handleSuccessResponse(
        `Nhà hàng đã được like`,
        undefined,
        result
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  unlike: async function (req, res, next) {
    try {
      const result = await likeService.unlike(req);
      const response = handleSuccessResponse(
        `Nhà hàng đã được unlike`,
        undefined,
        result
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },
};
