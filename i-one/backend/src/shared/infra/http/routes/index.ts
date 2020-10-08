import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import sessionsCompanyRouter from '@modules/companies/infra/http/routes/sessions.company.routes';
import companiesRouter from '@modules/companies/infra/http/routes/companies.routes';
import orderRouter from '@modules/orders/infra/http/routes/order.routes';
import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import providersRouter from '@modules/appointments/infra/http/routes/providers.routes';
import productCategoriesRouter from '@modules/products/infra/http/routes/productCategories.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/companies', companiesRouter);
routes.use('/orders', orderRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/providers', providersRouter);
routes.use('/product-categories', productCategoriesRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/sessions/company', sessionsCompanyRouter);
routes.use('/users', usersRouter);

export default routes;
