import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import AppError from '../errors/AppError';
import authConfig from '../config/auth';
import Company from '../models/Company';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: Company;
  token: string;
}

class AuthenticateCompanyService {
  public async execute({ email, password }: Request): Promise<Response> {
    const companyRepository = getRepository(Company);

    const company = await companyRepository.findOne({ where: { email } });

    if (!company) {
      throw new AppError('Incorrect e-mail/password combination,', 401);
    }

    const passwordMatched = await compare(password, company.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect e-mail/password combination.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: company.id,
      expiresIn,
    });

    return {
      user: company,
      token,
    };
  }
}

export default AuthenticateCompanyService;
