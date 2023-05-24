import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'

interface IUseDeleteMemoryProps {
  id: string
  token: string | undefined
}

export function useDeleteMemory({ id, token }: IUseDeleteMemoryProps) {
  const router = useRouter()

  return async function deleteMemoryById() {
    await api.delete(`/memories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    router.push('/')
  }
}
