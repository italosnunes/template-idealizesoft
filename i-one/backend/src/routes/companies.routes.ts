import { Router } from 'express';

import CreateCompanyService from '../services/CreateCompanyService';

const companiesRouter = Router();

companiesRouter.post('/', async (request, response) => {
  const { name, email, password, cpfcnpj } = request.body;

  const createCompany = new CreateCompanyService();

  const company = await createCompany.execute({
    name,
    email,
    password,
    cpfcnpj,
  });

  delete company.password;

  return response.json(company);
});

export default companiesRouter;
