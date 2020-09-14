import { compare, hash } from 'bcryptjs';
import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import User from '@modules/users/infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';

interface Request {
  email: string;
  passwordOld: string;
  password: string;
  passwordConfirm: string;
}

@injectable()
class AlterPasswordUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) {}

  public async execute({
    email,
    passwordOld,
    password,
    passwordConfirm,
  }: Request): Promise<User> {
    const user = await this.usersRepository.findByEmail(email);

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

    await this.usersRepository.save(user);

    return user;
  }
}

export default AlterPasswordUserService;
