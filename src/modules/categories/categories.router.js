import { Router} from 'express';
import * as categoriesController from './categories.controller.js';
import fileUpload, { fileValidation } from "../../services/multer.js";
import subCategoryRouter from './../subcategory/subcategory.router.js';
const router =Router();

router.use('/:id/subcategory',subCategoryRouter)
router.get('/',categoriesController.getCategories)
router.get('/active',categoriesController.getActiveCategory)
router.get('/:id',categoriesController.getSpecificCategory)
router.post('/',fileUpload(fileValidation.image).single('image'),
categoriesController.createCategory)
router.put('/:id',fileUpload(fileValidation.image).single('image'),categoriesController.updateCategory)

export default router; 