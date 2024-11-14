'use client'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function ClientMotionWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const path = usePathname()
  const [currentPath, setCurrentPath] = useState(path)
  useEffect(() => {
    setCurrentPath(path)
  }, [path])
  return (
    <motion.div
      key={currentPath}
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
