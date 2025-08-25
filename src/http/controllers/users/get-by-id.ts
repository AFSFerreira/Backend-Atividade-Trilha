import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { UserNotFoundError } from '../../../use-cases/errors/user-not-found-error';
import { makeGetUserByIdUseCase } from '../../../use-cases/factories/make-get-user-by-id-use-case';

export async function getUserById(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    userId: z.string().uuid(),
  });
  const parseParams = paramsSchema.parse(request.params);
  const { userId } = parseParams;
  try {
    const getUserByIdUseCase = makeGetUserByIdUseCase();
    const { user } = await getUserByIdUseCase.execute({ userId });
    return reply.status(200).send({ user });
  } catch (error: any) {
    if (error instanceof UserNotFoundError) {
      return reply.status(404).send({ message: error.message });
    }
    return reply.status(500).send({ message: 'Internal server error' });
  }
}
