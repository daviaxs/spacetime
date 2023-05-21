import { api } from '@/lib/api'
import { EmptyMemories } from '@/shared/components/EmptyMemories'
import { cookies } from 'next/headers'

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

  const memories = response.data

  if (memories.lenght === 0) {
    return <EmptyMemories />
  }

  return (
    <div className="flex flex-col gap-10 p-8">{JSON.stringify(memories)}</div>
  )
}
