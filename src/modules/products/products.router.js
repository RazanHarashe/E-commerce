import { Router } from "express";
import * as productController from './products.controller.js';
import { endPoint } from "./products.endpoint.js";
import {auth} from '../../middleware/auth.js';
import fileUpload,{fileValidation} from '../../services/multer.js'

const router=Router();

router.get('/',productController.getProducts)
router.post('/',auth(endPoint.create),fileUpload(fileValidation.image).fields([
    {name:'mainImage',maxCount:1},
    {name:'subImage',maxCount:4},
]),productController.createProduct);


export default router; 