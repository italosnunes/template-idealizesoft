import { getRepository } from 'typeorm';
import Order from '@modules/orders/infra/typeorm/entities/Order';

class FindOrderService {
  public async execute(): Promise<Order[]> {
    const repository = getRepository(Order);
    const orders = await repository.find();

    return orders;
  }
}

export default FindOrderService;
