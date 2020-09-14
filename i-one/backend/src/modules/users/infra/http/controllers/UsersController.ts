import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import FindUserService from '@modules/users/services/FindUserService';
import AlterPasswordUserService from '@modules/users/services/AlterPasswordUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listUsers = container.resolve(FindUserService);

    const users = await listUsers.execute();

    return response.json(users);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { email, passwordOld, password, passwordConfirm } = request.body;

    const alterPassword = container.resolve(AlterPasswordUserService);

    const user = await alterPassword.execute({
      email,
      passwordOld,
      password,
      passwordConfirm,
    });

    delete user.password;

    return response.json(user);
  }
}
