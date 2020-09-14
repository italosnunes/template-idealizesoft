import { getRepository } from 'typeorm';
import Order from '@modules/orders/infra/typeorm/entities/Order';

interface Items {
  id: string;
  title: string;
}
interface OrderItems {
  order: Order;
  items: Array<Items>;
}

interface Request {
  userName: string;
}

class FindOrderByUser {
  public async execute({ userName }: Request): Promise<any> {
    const orderRepository = getRepository(Order);

    const orders = await orderRepository.find({
      where: {
        vendedor: userName,
      },
    });

    const newOrders: Array<OrderItems> = [];
    let itens: Array<Items> = [];

    orders.map(order => {
      itens = [];
      if (order.cerveja === 'N') {
        itens.push({ id: 'cerveja', title: 'Cerveja' });
      }

      if (order.rgb === 'N') {
        itens.push({ id: 'rgb', title: 'RGB' });
      }
      if (order.litro === 'N') {
        itens.push({ id: 'litro', title: 'Litro' });
      }
      if (order.litrinho === 'N') {
        itens.push({ id: 'litrinho', title: 'Litrinho' });
      }
      if (order.inteira === 'N') {
        itens.push({ id: 'inteira', title: 'Inteira' });
      }
      if (order.he === 'N') {
        itens.push({ id: 'he', title: 'HE' });
      }
      if (order.puroMalte === 'N') {
        itens.push({ id: 'puroMalte', title: 'Puro Malte' });
      }
      if (order.nab === 'N') {
        itens.push({ id: 'nab', title: 'NAB' });
      }
      if (order.redbull === 'N') {
        itens.push({ id: 'redbull', title: 'Redbull' });
      }
      if (order.bdm === 'N') {
        itens.push({ id: 'bdm', title: 'BDM' });
      }
      if (order.ml350 === 'N') {
        itens.push({ id: 'ml350', title: '350ml' });
      }
      if (order.ml600 === 'N') {
        itens.push({ id: 'ml600', title: '600ml' });
      }
      if (order.skPm === 'N') {
        itens.push({ id: 'skPm', title: 'SKPM' });
      }
      if (order.bohPm === 'N') {
        itens.push({ id: 'bohPm', title: 'BOHPM' });
      }
      if (order.he2 === 'N') {
        itens.push({ id: 'he2', title: 'HE(2)' });
      }
      if (order.value === 'N') {
        itens.push({ id: 'value', title: 'Value' });
      }

      newOrders.push({ order, items: itens });
    });

    return newOrders;
  }
}

export default FindOrderByUser;
