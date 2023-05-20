import { MediaPicker } from '@/shared/components/MediaPicker'
import { Camera, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 transition-colors hover:text-gray-100"
      >
        <ChevronLeft />
        voltar à timeline
      </Link>

      <form className="flex flex-1 flex-col gap-2">
        <div className="flex flex-row gap-4">
          <label
            htmlFor="media"
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 transition-colors hover:text-gray-100"
          >
            <Camera className="h-4 w-4" />
            Adicionar mídia
          </label>

          <label
            htmlFor="isPublic"
            className="flex items-center gap-1.5 text-sm text-gray-200 transition-colors hover:text-gray-100"
          >
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              value="true"
              className="h-4 w-4 rounded border-gray-400 bg-gray-600 text-purple-500"
            />
            Tornar mídia pública
          </label>
        </div>

        <MediaPicker />

        <textarea
          name="content"
          spellCheck={false}
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
          className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
        />
      </form>
    </div>
  )
}
