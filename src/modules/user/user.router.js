import { Router } from "express";
import { asyncHandler } from "../../services/errorHandling.js";
import * as userController from './user.controller.js'
import { auth, roles } from "../../middleware/auth.js";
import fileUpload, { fileValidation } from "../../services/multer.js";

const router=Router();

router.get('/profile',auth(Object.values(roles)),asyncHandler(userController.getProfile));
router.post('/uploadUserExcel',auth(['User']),fileUpload(fileValidation.excel).single('file'),
asyncHandler(userController.uploadUserExcel));

export default router; 