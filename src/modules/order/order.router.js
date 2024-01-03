import { Router } from "express";
import * as orderController from "./order.controller.js";
import { endPoint } from "./order.endpoint.js";
import { auth } from "../../middleware/auth.js";
//import {validation} from '../../middleware/auth.js'
const router = Router();

router.post("/", auth(endPoint.create), orderController.createOrder);
router.get("/", auth(endPoint.get), orderController.getOrders);
router.patch(
  "/cancel/:orderId",
  auth(endPoint.cancel),
  orderController.cancelOrder
);
router.patch(
  "/changeStatus/:orderId",
  auth(endPoint.changeStatus),
  orderController.changeStatus
);
export default router;
