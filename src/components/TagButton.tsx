'use client'
import React from 'react'
import { useState } from 'react'

interface TagInfo {
  number?: number
  color: string
  children: React.ReactNode
}

const TagButton: React.FC<TagInfo> = ({ number, color, children }) => {
  const [bg, setBg] = useState(`${color}33`)
  return (
    <div
      className="h-fit w-fit flex justify-center items-center px-2.5 py-1.5 rounded-full cursor-pointer transition-colors duration-200"
      style={{ backgroundColor: bg }}
      onMouseOver={() => {
        setBg(`${color}66`)
      }}
      onMouseLeave={() => {
        setBg(`${color}33`)
      }}
    >
      {children}
      <span className="mdlg:text-sm text-xs font-[inder] ml-1 text-gray-700">
        {number && (number / 1000).toFixed(2) + 'k'}
      </span>
    </div>
  )
}

export default TagButton
