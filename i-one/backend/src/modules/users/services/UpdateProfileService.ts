import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import User from '@modules/users/infra/typeorm/entities/User';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUserRepository from '../repositories/IUserRepository';

interface Request {
  user_id: string;
  name: string;
  email: string;
  password?: string;
  old_password?: string;
}

@injectable()
export default class UpdateProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute(data: Request): Promise<User> {
    const user = await this.usersRepository.findById(data.user_id);

    if (!user) {
      throw new AppError('User not found.');
    }

    const userWithUpdatedEmail = await this.usersRepository.findByEmail(
      data.email,
    );

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== data.user_id) {
      throw new AppError('E-mail already in use.');
    }

    user.name = data.name;
    user.email = data.email;

    if (!data.old_password && data.password) {
      throw new AppError(
        'You nedd to inform the old password to set a new password',
      );
    }

    if (data.password && data.old_password) {
      const checkOldPassword = await this.hashProvider.compareHash(
        data.old_password,
        user.password,
      );

      if (!checkOldPassword) {
        throw new AppError('Old password is not match');
      }

      user.password = await this.hashProvider.generateHash(data.password);
    }

    await this.usersRepository.save(user);
    return user;
  }
}
