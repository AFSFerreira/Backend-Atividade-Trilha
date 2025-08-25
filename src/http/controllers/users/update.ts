
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeUpdateUserUseCase } from '../../../use-cases/factories/make-update-user-use-case';

export async function updateUser(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    userId: z.string().uuid(),
  })
  const bodySchema = z.object({
    name: z.string().min(1).optional(),
    email: z.string().email().optional(),
    password: z.string().min(6).optional(),
  })

  const { userId } = paramsSchema.parse(request.params)
  const { name, email, password } = bodySchema.parse(request.body)
  
  try {
    const updateUserUseCase = makeUpdateUserUseCase()
    const { user } = await updateUserUseCase.execute({ userId, name, email, password })
    return reply.status(200).send({ user })
  } catch (error: any) {
    return reply.status(404).send({ message: error.message })
  }
}
