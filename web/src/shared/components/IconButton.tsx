import React from 'react'

export function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex h-7 w-7 items-center justify-center rounded border-[0.5px] border-gray-400 bg-gray-600">
      {children}
    </button>
  )
}
