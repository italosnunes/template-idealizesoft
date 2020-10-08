import { Router } from 'express';

import ProductCategoriesController from '../controller/ProductCategoriesController';

const productCategoriesRouter = Router();
const productCategoriesController = new ProductCategoriesController();

productCategoriesRouter.post('/', productCategoriesController.create);
productCategoriesRouter.get('/', productCategoriesController.index);

export default productCategoriesRouter;
