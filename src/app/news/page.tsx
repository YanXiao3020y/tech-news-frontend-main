'use client'
import { useRef, useEffect } from 'react'
import Link from 'next/link'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import withLoadingError from '@/components/withLoadingError'
import React from 'react'

type New = {
  _id: string
  link: string
  published: string
  title: string
}
function NewsPage({ data }: { data: New[] }) {
  const boxesRef = useRef<HTMLLIElement[]>([])
  const addToRefs = (el: HTMLLIElement) => {
    if (el && !boxesRef.current.includes(el)) {
      boxesRef.current.push(el)
    }
  }
  useEffect(() => {
    if (data && data.length === 0) {
      return
    }

    function checkBoxes() {
      const triggerBottom = (window.innerHeight / 7) * 6 //
      boxesRef.current.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop > triggerBottom) {
          box.classList.remove('show')
        } else {
          box.classList.add('show')
        }
      })
    }

    window.addEventListener('scroll', checkBoxes)
    checkBoxes()
    return () => {
      window.removeEventListener('scroll', checkBoxes)
    }
  }, [data])

  return (
    <ClientMotionWrapper>
      <div className="mx-auto max-w-4xl p-8">
        <h1 className="sm:text-4xl text-3xl font-[Iceberg] font-bold mb-10">News</h1>
        <div className="max-w-3xl mx-auto text-gray-800">
          <ul>
            {data.map((item, index) => (
              <li
                key={item._id}
                className="bg-white border p-6 mb-6 rounded-lg shadow-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl"
                ref={addToRefs}
                style={{
                  transform: `translateX(${index % 2 === 0 ? '' : '-'}1500px)`
                }}
              >
                <span className="sm:text-sm text-xs text-gray-500">
                  {item.published.slice(0, -6)}
                </span>
                <Link
                  href={item.link}
                  className="block md:text-2xl sm:text-xl text-lg font-semibold text-gray-800 hover:text-blue-600 mt-2 transition-colors"
                >
                  {item.title}
                </Link>
                <p className="text-gray-600 mt-4"></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ClientMotionWrapper>
  )
}

export default withLoadingError<New[]>(NewsPage, {
  url: 'newest'
})
