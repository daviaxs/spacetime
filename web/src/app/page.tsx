import { api } from '@/lib/api'
import { EmptyMemories } from '@/shared/components/EmptyMemories'
import { cookies } from 'next/headers'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'

dayjs.locale(ptBr)

interface IMemoryProps {
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

export default async function Home() {
  const isAuthenticated = cookies().has('token')
  const token = cookies().get('token')?.value

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memories: IMemoryProps[] = response.data

  if (memories.length === 0) {
    return <EmptyMemories />
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => {
        return (
          <div key={memory.id} className="space-y-4">
            <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
              {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
            </time>
          </div>
        )
      })}
    </div>
  )
}
