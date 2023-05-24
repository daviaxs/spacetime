import React from 'react'

interface IIconButtonProps {
  children: React.ReactNode
  onClick: () => void
}

export function IconButton({ children, onClick }: IIconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex h-7 w-7 items-center justify-center rounded border-[0.5px] border-gray-400 bg-gray-600"
    >
      {children}
    </button>
  )
}
