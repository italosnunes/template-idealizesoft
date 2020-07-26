import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Company from '../models/Company';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  password: string;
  cpfcnpj: string;
}

class CreateCompanyService {
  public async execute({
    name,
    email,
    password,
    cpfcnpj,
  }: Request): Promise<Company> {
    const repository = getRepository(Company);

    const checkCompanyExists = await repository.findOne({
      where: { cpfcnpj },
    });

    if (checkCompanyExists) {
      throw new AppError('Company already used');
    }

    const hashedPassword = await hash(password, 8);

    const company = repository.create({
      name,
      email,
      cpfcnpj,
      password: hashedPassword,
    });

    await repository.save(company);
    return company;
  }
}

export default CreateCompanyService;
