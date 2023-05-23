import { NewMemoryForm } from '@/shared/components/NewMemoryForm'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-16">
      <Link
        href="/"
        className="-ml-2 flex items-center gap-1 text-sm text-gray-200 opacity-50 transition-opacity hover:opacity-100"
      >
        <ChevronLeft />
        voltar à timeline
      </Link>

      <NewMemoryForm />
    </div>
  )
}
