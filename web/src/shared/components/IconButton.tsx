import React from 'react'

export function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="h-6 w-6 rounded border-[0.5px] border-gray-400 bg-gray-600">
      {children}
    </button>
  )
}
