import { User } from '@prisma/client'
import { UsersRepository } from '../repositories/users-repository'
import { UserNotFoundError } from './errors/user-not-found-error'
import { hash } from 'bcryptjs'

interface UpdateUserUseCaseRequest {
  userId: string
  name?: string
  email?: string
  password?: string
}

interface UpdateUserUseCaseResponse {
  user: User
}

export class UpdateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ userId, name, email, password }: UpdateUserUseCaseRequest): Promise<UpdateUserUseCaseResponse> {
    const user = await this.usersRepository.findById(userId)
        if (!user) {
          throw new UserNotFoundError()
    }

    const updateData: any = {}
    if (name) updateData.name = name
    if (email) updateData.email = email
    if (password) updateData.passwordDigest = await hash(password, 10)
    
    const updatedUser = await this.usersRepository.update(userId, updateData)
    return { user: updatedUser }
  }
}
