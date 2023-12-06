import { Router } from "express";
import { asyncHandler } from "../../services/errorHandling.js";
import * as userController from './user.controller.js'
import { auth, roles } from "../../middleware/auth.js";
const router=Router();

router.get('/profile',auth(Object.values(roles)),asyncHandler(userController.getProfile));

export default router; 