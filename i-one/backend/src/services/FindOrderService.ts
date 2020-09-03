import { getRepository } from 'typeorm';
import Order from '../models/Order';

class FindOrderService {
  public async execute(): Promise<Order[]> {
    const repository = getRepository(Order);
    const orders = await repository.find();

    return orders;
  }
}

export default FindOrderService;
