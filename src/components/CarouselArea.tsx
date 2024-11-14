'use client'
import { useState, useEffect, useCallback } from 'react'
interface CarouselItem {
  title?: string
  descr?: string
  imageUrl?: string
}

function CarouselArea() {
  const [data] = useState<Array<CarouselItem>>([
    {
      title: 'Global Markets Rally as Tech Stocks Surge',
      descr:
        'Technology stocks led a global market rally today as investor sentiment improved on optimism around the latest earnings reports and positive economic data.'
    },
    {
      title: 'Breakthrough Achieved in Renewable Energy Technology',
      descr:
        'Scientists have developed a new solar panel technology that promises to significantly increase energy efficiency and reduce production costs, bringing the world closer to clean energy goals.'
    },
    {
      title: 'New Study Reveals the Impact of Social Media on Mental Health',
      descr:
        'A recent study suggests that heavy use of social media platforms is linked to increased anxiety and depression among young adults, sparking discussions on the need for regulation and digital well-being initiatives.'
    },
    {
      title: 'Major Earthquake Strikes Pacific Island Region',
      descr:
        'A 7.5 magnitude earthquake has struck a remote region of the Pacific, causing significant damage to infrastructure and leaving thousands displaced. Rescue and relief efforts are currently underway.'
    },
    {
      title: 'Innovative Startups Transforming the Future of Food',
      descr:
        'Several startups are at the forefront of transforming the food industry with plant-based meats, lab-grown proteins, and sustainable farming practices that aim to revolutionize what we eat and how we produce food.'
    }
  ])
  const [title, setTitle] = useState<string | undefined>(data[0].title)
  const [content, setContent] = useState<string | undefined>(data[0].descr)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const toggleTo = useCallback(
    (index: number): void => {
      if (data[index] !== undefined) {
        setActiveIndex(index)
        setTitle(data[index].title)
        setContent(data[index].descr)
      }
    },
    [data]
  )
  useEffect(() => {
    toggleTo(0)
  }, [toggleTo])
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      toggleTo((activeIndex + 1) % data.length)
    }, 5000)
    return () => clearTimeout(timeoutId)
  }, [activeIndex, data])
  return (
    <div className="w-[700px] h-[340px] bg-white rounded-lg flex flex-col items-start px-[60px] py-[50px] relative overflow-hidden mt-4 mb-6 shadow-lg shadow-gray-200 z-[1]">
      <div className="w-7/8 font-[Inder] text-3xl mb-8">
        <span>{title}</span>
      </div>
      <div className="w-4/5 font-[Inder] text-base overflow-auto">
        <span>{content}</span>
      </div>
      {data.map((item, index) => {
        return (
          <i
            className={`${
              index === activeIndex ? 'w-6 !bg-gray-300' : ''
            } w-4 h-3 border-2 border-white rounded-full bg-gray-400 absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out`}
            key={index}
            onClick={() => toggleTo(index)}
            style={{
              transform: `translateX(${
                (index - data.length / 2) * 20 + (index > activeIndex ? 8 : 0)
              }px)`
            }}
          ></i>
        )
      })}
    </div>
  )
}

export default CarouselArea
