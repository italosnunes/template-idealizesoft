import { inject, injectable } from 'tsyringe';
import ProductCategory from '../infra/typeorm/entities/ProductCategory';
import IProductCategoriesRepository from '../repositories/IProductCategoriesRepository';

interface IRequest {
  name: string;
}
@injectable()
class CreateProductCategoryService {
  constructor(
    @inject('ProductCategoriesRepository')
    private productCategoriesRepository: IProductCategoriesRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<ProductCategory> {
    const category = await this.productCategoriesRepository.create({
      name,
    });

    return category;
  }
}

export default CreateProductCategoryService;
