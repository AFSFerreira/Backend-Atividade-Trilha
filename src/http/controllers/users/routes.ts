import { FastifyInstance } from "fastify";
import { authentication } from "../../../middlewares/authentication";
import { authenticate } from "./authenticate";
import { getAllUsers } from "./get-all";
import { getUserById } from "./get-by-id";
import { register } from "./register";
import { updateUser } from "./update";

export async function userRoutes(app: FastifyInstance) {
     app.post('/users', register)
     app.patch('/users/:userId', { preHandler: [authentication] }, updateUser)
     app.get('/users/:userId', getUserById)
     app.get('/users', getAllUsers)
     app.post('/sessions', authenticate)
}
