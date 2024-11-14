import React from 'react'

interface ProductCardProps {
  author: string
  productName: string
  releaseDate: string
  description: string // Hover 时显示的详细信息
  link: string // 跳转链接
}

const ProductCard: React.FC<ProductCardProps> = ({
  author,
  productName,
  releaseDate,
  description,
  link = '#'
}) => {
  return (
    <div className="relative w-[384px] h-36 md:w-80 md:h-48 sm:w-80 sm:h-44 border rounded-lg overflow-hidden shadow-lg shadow-gray-200 transition-transform transform hover:scale-105">
      <div className="absolute inset-0 md:p-8 p-6 bg-white transition-opacity duration-300 ease-in-out hover:opacity-0">
        <h2 className="md:text-2xl text-xl font-semibold mb-5 text-nowrap overflow-ellipsis overflow-hidden">
          {productName}
        </h2>
        <p className="text-sm text-gray-500">Author: {author}</p>
        <p className="text-sm text-gray-500">Release: {releaseDate}</p>
      </div>

      <div className="absolute inset-0 md:p-8 p-6 pb-1 bg-blue-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h2 className="md:text-2xl text-xl font-semibold mb-5 text-nowrap overflow-ellipsis overflow-hidden">
          {productName}
        </h2>
        {description.split(',').map((item) => {
          return (
            <p className="text-sm text-wrap break-words leading-relaxed">{item}</p>
          )
        })}
        <a
          href={link}
          className="absolute right-8 sm:right-0 block text-center sm:relative sm:-bottom-2 h-max px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          target="_blank"
        >
          Read More
        </a>
      </div>
    </div>
  )
}

export default ProductCard
