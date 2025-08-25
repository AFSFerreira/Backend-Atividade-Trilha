import { User } from '@prisma/client';
import { UsersRepository } from '../repositories/users-repository';

interface GetAllUsersUseCaseResponse {
  users: User[];
}

export class GetAllUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<GetAllUsersUseCaseResponse> {
    const users = await this.usersRepository.findAll();
    return { users };
  }
}
