import { container } from 'tsyringe';

import IProductCategoriesRepository from '@modules/products/repositories/IProductCategoriesRepository';
import ProductCategoriesRepository from '@modules/products/infra/typeorm/repositories/ProductCategoriesRepository';

container.registerSingleton<IProductCategoriesRepository>(
  'ProductCategoriesRepository',
  ProductCategoriesRepository,
);
