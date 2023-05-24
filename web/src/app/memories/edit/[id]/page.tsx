'use client'

import { api } from '@/lib/api'
import { IconButton } from '@/shared/components/IconButton'
import { MediaPicker } from '@/shared/components/MediaPicker'
import Cookie from 'js-cookie'
import { Camera, ChevronLeft, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'

export default function EditMemory() {
  const [textareaContent, setTextareaContent] = useState<string>('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const { id } = useParams()
  const token = Cookie.get('token')

  useEffect(() => {
    if (textareaContent === '') {
      setIsButtonDisabled(true)
    } else {
      setIsButtonDisabled(false)
    }
  }, [textareaContent])

  function handleInputTextarea(event: FormEvent<HTMLTextAreaElement>) {
    setTextareaContent(event.currentTarget.value)
  }

  async function handleEditMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const fileToUpload = formData.get('coverUrl')

    let coverUrl = ''

    if (fileToUpload) {
      const uploadFormData = new FormData()
      uploadFormData.set('file', fileToUpload)

      const uploadResponse = await api.post('/upload', uploadFormData)

      coverUrl = uploadResponse.data.fileUrl
    }

    await api.patch(
      `/memories/${id}`,
      {
        coverUrl,
        content: formData.get('content'),
        isPublic: formData.get('isPublic'),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
  }

  async function handleDeleteMemory() {
    await api.delete(`/memories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }

  return (
    <form
      onSubmit={handleEditMemory}
      className="flex flex-1 flex-col gap-2 p-8"
    >
      <Link
        href="/"
        className="-ml-2 mb-4 flex items-center gap-1 text-sm text-gray-200 opacity-50 transition-opacity hover:opacity-100"
      >
        <ChevronLeft />
        voltar à timeline
      </Link>

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

        <IconButton>
          <Trash2 width={20} height={20} />
        </IconButton>
      </div>

      <MediaPicker />

      <textarea
        name="content"
        value={textareaContent}
        onInput={handleInputTextarea}
        spellCheck={false}
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
        className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
      />

      <button
        className={`${
          isButtonDisabled
            ? 'cursor-no-drop bg-red-500 opacity-50 hover:bg-red-400'
            : null
        } inline-block self-end rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600`}
        type="submit"
        disabled={isButtonDisabled}
      >
        Salvar
      </button>
    </form>
  )
}
