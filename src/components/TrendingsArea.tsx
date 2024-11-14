'use client'
import { Link } from 'next-view-transitions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

type DataType = {
  _id: string
  link: string
  published: string
  title: string
}

const transformData = (res: DataType[]) => {
  res.sort(
    (a: DataType, b: DataType) =>
      new Date(b.published).getTime() - new Date(a.published).getTime()
  )
  res.splice(5)
  res.forEach((item) => {
    const date = new Date(item.published)
    item.published =
      date.getFullYear() +
      '-' +
      String(date.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(date.getDate()).padStart(2, '0') +
      ' ' +
      String(date.getHours()).padStart(2, '0') +
      ':' +
      String(date.getMinutes()).padStart(2, '0')
  })
  return res
}

export default function TrendingsArea({ data }: { data: DataType[] }) {
  return (
    <div className="w-[700px] h-[520px] border bg-white shadow-lg shadow-gray-200 rounded-lg flex flex-col items-center">
      <div className="flex items-center w-full px-10 py-8">
        <h1 className="font-[Inder] text-3xl mr-3">Trendings</h1>
        <FontAwesomeIcon icon={faArrowTrendUp} className="text-xl" />
      </div>
      <div className="w-3/4">
        <ol className="list-decimal">
          {(transformData(data as DataType[]) as DataType[]).map(
            (item, index) => {
              return (
                <li className="mb-5" key={index}>
                  <a
                    href={item.link}
                    className="no-underline transition-colors duration-200 hover:text-blue-600"
                  >
                    <p className="break-words overflow-x-hidden text-ellipsis text-nowrap mb-2">
                      {item.title}
                    </p>
                  </a>
                  <p className="text-sm text-gray-500 text-right transform translate-x-10">
                    {item.published}
                  </p>
                </li>
              )
            }
          )}
        </ol>
      </div>
      <Link
        href="/news"
        className=" w-full pb-4 pt-4 rounded-b-lg hover:bg-gray-100 transition-colors duration-300 mt-auto flex flex-col items-center"
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          className="text-xl"
        ></FontAwesomeIcon>
      </Link>
    </div>
  )
}
