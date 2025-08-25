import { FastifyReply, FastifyRequest } from 'fastify';
import { makeGetAllUsersUseCase } from '../../../use-cases/factories/make-get-all-users-use-case';

export async function getAllUsers(request: FastifyRequest, reply: FastifyReply) {
  try {
    const getAllUsersUseCase = makeGetAllUsersUseCase();
    const { users } = await getAllUsersUseCase.execute();
    return reply.status(200).send({ users });
  } catch (error: any) {
    return reply.status(500).send({ message: 'Internal server error' });
  }
}
