import { inject, injectable } from 'tsyringe';
import ProductCategory from '../infra/typeorm/entities/ProductCategory';
import IProductCategoriesRepository from '../repositories/IProductCategoriesRepository';

@injectable()
export default class ListProductCategoriesService {
  constructor(
    @inject('ProductCategoriesRepository')
    private productCategoryRepository: IProductCategoriesRepository,
  ) {}

  public async execute(): Promise<ProductCategory[]> {
    const categories = await this.productCategoryRepository.findAll();

    return categories;
  }
}
