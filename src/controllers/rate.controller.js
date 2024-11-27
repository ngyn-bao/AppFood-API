import { handleSuccessResponse } from "../helper/handleResponse.js";
import { rateService } from "../services/rate.service.js";

export const rateController = {
  getByUser: async function (req, res, next) {
    try {
      const result = await rateService.getByUser(req);
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
      const result = await rateService.getByRes(req);
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

  uploadRate: async function (req, res, next) {
    try {
      const result = await rateService.uploadRate(req);
      const response = handleSuccessResponse(
        `Nhà hàng đã được rate`,
        undefined,
        result
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },
};
