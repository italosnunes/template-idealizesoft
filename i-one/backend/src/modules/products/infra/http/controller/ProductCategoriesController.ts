import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProductCategoryService from '@modules/products/services/CreateProductCategoryService';
import ListProductCategoriesService from '@modules/products/services/ListProductCategoryService';

export default class ProductCategoriesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createCategory = container.resolve(CreateProductCategoryService);

    const category = await createCategory.execute({
      name,
    });

    return response.json(category);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listProductCategories = container.resolve(
      ListProductCategoriesService,
    );

    const categories = await listProductCategories.execute();

    return response.json(categories);
  }
}
