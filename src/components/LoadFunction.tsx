'use client'
import { useState, useEffect } from 'react'

const fetchData = async (url: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl}/${url}`, {
    cache: 'no-store'
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data.')
  }
  return res.json()
}

const useLoadFunction = <T,>(url: string) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<T>()
  useEffect(() => {
    const id = setInterval(() => {
      load()
    }, 10000)
    const load = async () => {
      try {
        setLoading(true)
        const res = await fetchData(url)
        setData(res)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
        clearInterval(id)
      }
    }
    load()
    return () => clearInterval(id)
  }, [url])

  return { loading, error, data }
}

export default useLoadFunction
