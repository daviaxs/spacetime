import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
  const Users = await prisma.user.findMany()

  return Users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Servidor rodando em http://localhost:3333 🚀')
  })
