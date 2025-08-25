import { PrismaUsersRepository } from '../../repositories/prisma/prisma-users-repository'
import { UpdateUserUseCase } from '../update-user'

export function makeUpdateUserUseCase() {
  const usersRepository = new PrismaUsersRepository()
  return new UpdateUserUseCase(usersRepository)
}
