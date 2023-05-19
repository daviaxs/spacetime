import { cookies } from 'next/headers'
import Link from 'next/link'

const signInURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function EmptyMemories() {
  const isAuthenticated = cookies().has('token')

  return (
    <div className="flex flex-1 items-center justify-center">
      {isAuthenticated ? (
        <p className="w-[360px] text-center leading-relaxed">
          Você ainda não registrou nenhuma lembrança, comece a{' '}
          <Link
            href="/memories/new"
            className="underline transition-colors hover:text-gray-50"
          >
            criar agora!
          </Link>
        </p>
      ) : (
        <p className="w-[360px] text-center leading-relaxed">
          <Link
            href={signInURL}
            className="underline transition-colors hover:text-gray-50"
          >
            Crie sua conta
          </Link>{' '}
          e comece a criar lembraças agora mesmo!
        </p>
      )}
    </div>
  )
}
