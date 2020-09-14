import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import sessionsCompanyRouter from '@modules/companies/infra/http/routes/sessions.company.routes';
import companiesRouter from '@modules/companies/infra/http/routes/companies.routes';
import orderRouter from '@modules/orders/infra/http/routes/order.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/companies', companiesRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/sessions/company', sessionsCompanyRouter);
routes.use('/orders', orderRouter);

export default routes;
