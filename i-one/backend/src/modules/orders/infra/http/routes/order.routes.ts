import { Router } from 'express';
import multer from 'multer';

import ImportOrdersService from '@modules/orders/services/ImportOrdersService';
import FindOrderService from '@modules/orders/services/FindOrderService';

import uploadConfig from '@config/upload';
import FindOrderByUser from '@modules/orders/services/FindOrderByUser';

const upload = multer(uploadConfig);

const orderRouter = Router();

orderRouter.get('/', async (request, response) => {
  const listOrders = new FindOrderService();

  const orders = await listOrders.execute();

  return response.json(orders);
});

orderRouter.post('/by-saler', async (request, response) => {
  const { userName } = request.body;

  const listOrders = new FindOrderByUser();

  const orders = await listOrders.execute({ userName });

  return response.json(orders);
});

orderRouter.post(
  '/import',
  upload.single('file'),
  async (request, response) => {
    const importOrders = new ImportOrdersService();

    const orders = await importOrders.execute(request.file.path);

    return response.json(orders);
  },
);

export default orderRouter;
