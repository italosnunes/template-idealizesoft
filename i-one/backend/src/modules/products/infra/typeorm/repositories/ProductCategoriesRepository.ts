import { getRepository, Repository } from 'typeorm';

import ICreateProductCategoryDTO from '@modules/products/dtos/ICreateProductCategoryDTO';
import IProductCategoriesRepository from '@modules/products/repositories/IProductCategoriesRepository';
import ProductCategory from '../entities/ProductCategory';

class ProductCategoriesRepository implements IProductCategoriesRepository {
  private ormRepository: Repository<ProductCategory>;

  constructor() {
    this.ormRepository = getRepository(ProductCategory);
  }

  public async create({
    name,
  }: ICreateProductCategoryDTO): Promise<ProductCategory> {
    const category = await this.ormRepository.create({ name });

    await this.ormRepository.save(category);
    return category;
  }

  public async findAll(): Promise<ProductCategory[]> {
    const categories = await this.ormRepository.find();

    return categories;
  }
}

export default ProductCategoriesRepository;
