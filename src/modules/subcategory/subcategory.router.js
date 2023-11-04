import { Router } from 'express';
import * as subCategoriesController from './subcategory.controller.js';
import fileUpload, { fileValidation } from "../../services/multer.js";
const router =Router({mergeParams:true});

router.post('/',fileUpload(fileValidation.image).single('image'),
subCategoriesController.createSubCategory)

router.get('/',subCategoriesController.getSubCategories)




export default router; 