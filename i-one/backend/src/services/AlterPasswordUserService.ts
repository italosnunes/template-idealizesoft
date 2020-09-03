import { getRepository } from 'typeorm';
import { compare, hash } from 'bcryptjs';

import AppError from '../errors/AppError';
import User from '../models/User';

interface Request {
  email: string;
  passwordOld: string;
  password: string;
  passwordConfirm: string;
}

class AlterPasswordUserService {
  public async execute({
    email,
    passwordOld,
    password,
    passwordConfirm,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new AppError('Inconrect e-mail/password combination.', 401);
    }

    const passwordMatched = await compare(passwordOld, user.password);

    if (!passwordMatched) {
      throw new AppError('Inconrect password combination.', 401);
    }

    if (password !== passwordConfirm) {
      throw new AppError('Inconrect password combination.', 401);
    }

    const hashedPassword = await hash(password, 8);

    user.password = hashedPassword;
    user.alterPassword = false;

    await usersRepository.save(user);

    return user;
  }
}

export default AlterPasswordUserService;
