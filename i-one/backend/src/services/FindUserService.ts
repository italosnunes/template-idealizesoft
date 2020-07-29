import { getRepository } from 'typeorm';
import User from '../models/User';

class FindUserService {
  public async execute(): Promise<User[]> {
    const repository = getRepository(User);

    const users = await repository.find();

    return users;
  }
}

export default FindUserService;
