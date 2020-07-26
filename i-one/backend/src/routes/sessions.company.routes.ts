import { Router } from 'express';

import AuthenticateCompanyService from '../services/AuthenticateCompanyService';

const sessionsCompanyRouter = Router();

sessionsCompanyRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateCompany = new AuthenticateCompanyService();

  const { user, token } = await authenticateCompany.execute({
    email,
    password,
  });

  delete user.password;
  return response.json({ user, token });
});

export default sessionsCompanyRouter;
