import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('Middlaware')
}

export const config = {
  matcher: '/memories/:path*',
}
