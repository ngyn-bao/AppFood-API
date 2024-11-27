import { handleSuccessResponse } from "../helper/handleResponse.js";
import { orderService } from "../services/order.service.js";

export const orderController = {
  order: async function (req, res, next) {
    try {
      const result = await orderService.order(req);
      const response = handleSuccessResponse(
        `Order thành công`,
        undefined,
        result
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },
};
