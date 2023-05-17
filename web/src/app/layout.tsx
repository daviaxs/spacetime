import {
  Bai_Jamjuree as BaiJamjuree,
  Roboto_Flex as Roboto,
} from 'next/font/google'
import { ReactNode } from 'react'

import './globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'Cápsula do tempo',
  description:
    'Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
