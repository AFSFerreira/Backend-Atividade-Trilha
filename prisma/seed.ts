import { PrismaClient, UserRole } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.upsert({
    where: { email: "admin@email.com" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@email.com",
      role: UserRole.ADMIN,
      passwordDigest: await hash("12345678", 10),
    }
  })

  await prisma.user.upsert({
    where: { email: "user@email.com" },
    update: {},
    create: {
      name: "User",
      email: "user@email.com",
      role: UserRole.DEFAULT,
      passwordDigest: await hash("12345678", 10),
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
