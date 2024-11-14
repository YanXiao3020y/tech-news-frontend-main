import { Link } from 'next-view-transitions'
function ExpandMenu({ status }: { status?: boolean }) {
  const items = ['news', 'products', 'tools']
  return (
    <div
      className={`flex flex-col w-32 h-44 rounded-lg shadow-lg bg-white absolute -left-8 top-18 overflow-hidden opacity-0 transition-all duration-300 ${
        status ? 'opacity-100 z-10' : '!h-12 pointer-events-none'
      }`}
    >
      {items.map((item, index) => {
        return (
          <Link
            className="font-thin flex justify-center items-center flex-grow transition-all leading-normal transition-200 hover:bg-black/10"
            key={index}
            href={`/${item}`}
          >
            {item}
          </Link>
        )
      })}
    </div>
  )
}

export default ExpandMenu
