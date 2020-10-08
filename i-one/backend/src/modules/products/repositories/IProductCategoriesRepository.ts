import ICreateProductCategoryDTO from '../dtos/ICreateProductCategoryDTO';
import ProductCategory from '../infra/typeorm/entities/ProductCategory';

export default interface IProductCategoriesRepository {
  create(data: ICreateProductCategoryDTO): Promise<ProductCategory>;
  findAll(): Promise<ProductCategory[]>;
}
