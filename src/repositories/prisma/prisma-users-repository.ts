import { Prisma } from '@prisma/client';
import { prisma } from '../../lib/prisma';
import { UsersRepository } from '../users-repository';

export class PrismaUsersRepository implements UsersRepository {
  async findAll() {
    return prisma.user.findMany();
  }
  async setLastLogin(id: string) {
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        lastLogin: new Date(),
      },
    })
  }

  async delete(id: string) {
    await prisma.user.delete({
      where: {
        id,
      },
    })
  }

  async update(id: string, data: Prisma.UserUpdateInput) {
    const user = await prisma.user.update({
      where: { id },
      data,
    })
    return user
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    return user
  }
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })
    return user
  }

  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })
    return user
  }
}
