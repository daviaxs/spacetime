import { api } from '@/lib/api'
import { EmptyMemories } from '@/shared/components/EmptyMemories'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { ArrowRight } from 'lucide-react'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

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
          <div key={memory.id} className="space-y-4 overflow-x-hidden">
            <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
              {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
            </time>

            <Image
              src={memory.coverUrl}
              alt=""
              className="aspect-video w-full rounded-lg object-cover"
              width={592}
              height={280}
            />

            <p className="text-lg leading-relaxed text-gray-100">
              {memory.excerpt}
            </p>

            <Link
              href={`/memories/${memory.id}`}
              className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
            >
              Ler mais
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )
      })}
    </div>
  )
}
