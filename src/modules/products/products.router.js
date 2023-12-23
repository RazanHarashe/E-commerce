import { Router } from "express";
import * as productController from './products.controller.js';
import { endPoint } from "./products.endpoint.js";
import {auth} from '../../middleware/auth.js';
import fileUpload,{fileValidation} from '../../services/multer.js'
import reviwRouter from '../review/review.router.js'
import * as validator from '../products/products.validation.js'
import { validation } from "../../middleware/validation.js";
const router=Router();

router.use('/:productId/review',reviwRouter)
router.get('/',productController.getProducts)
router.post('/',auth(endPoint.create),fileUpload(fileValidation.image).fields([
    {name:'mainImage',maxCount:1},
    {name:'subImage',maxCount:4},
]),validation(validator.createProduct),productController.createProduct);

router.get('/category/:categoryId',productController.getProductWithCategory);
router.get('/:productId',productController.getProducts);
export default router; 