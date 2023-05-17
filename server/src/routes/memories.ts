import { PrismaClient } from '@prisma/client'
import { FastifyInstance } from 'fastify'

const prisma = new PrismaClient()

export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/users', async () => {
    const Users = await prisma.user.findMany()

    return Users
  })
}
