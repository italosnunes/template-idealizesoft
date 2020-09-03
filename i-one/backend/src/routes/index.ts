import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import sessionsCompanyRouter from './sessions.company.routes';
import companiesRouter from './companies.routes';
import orderRouter from './order.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/companies', companiesRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/sessions/company', sessionsCompanyRouter);
routes.use('/orders', orderRouter);

export default routes;
