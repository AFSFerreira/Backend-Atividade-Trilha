import { Prisma, User } from "@prisma/client";

export interface UsersRepository {
     create: (data: Prisma.UserCreateInput) => Promise<User>
     findById: (id: string) => Promise<User | null>
     findByEmail: (email: string) => Promise<User | null>
     setLastLogin: (id: string) => Promise<void>
     delete: (id: string) => Promise<void>
     update: (id: string, data: Prisma.UserUpdateInput) => Promise<User>
     findAll: () => Promise<User[]>
}
