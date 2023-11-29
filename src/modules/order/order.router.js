import { Router } from "express";
import * as orderController from './order.controller.js';
import { endPoint } from "../order/order.endpoint.js";
import {auth} from '../../middleware/auth.js';
import {validation} from '../../middleware/auth.js'
const router=Router();


router.post('/',auth(endPoint.create),orderController.createOrder);


export default router; 