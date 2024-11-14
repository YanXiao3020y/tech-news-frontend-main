'use client'
import ToolCard from '@/components/ToolCard'
import withLoadingError from '@/components/withLoadingError'
import { motion } from 'framer-motion'
type Tool = {
  _id: string
  title: string
  summary: string
  stars: number
  forks: number
  language: string
}

function ToolsPage({ data }: { data: Tool[] }) {
  return (
    <div className="max-w-6xl mx-auto mdlg:p-8 p-6 text-gray-800">
      <h1 className="text-4xl font-[Iceberg] font-bold mb-10">Tools</h1>
      <div className="grid sm:min-w-[660px] max-w-fit grid-cols-1 sm:grid-cols-2 mdlg:gap-8 gap-4 mx-auto text-gray-800">
        {data
          .sort((a, b) => {
            if (b.stars === a.stars) {
              return b.forks - a.forks
            }
            return b.stars - a.stars
          })
          .map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: 'easeOut'
              }}
            >
              <ToolCard
                title={item.title}
                summary={item.summary}
                stars={item.stars}
                forks={item.forks}
                language={item.language}
              ></ToolCard>
            </motion.div>
          ))}
      </div>
    </div>
  )
}

export default withLoadingError<Tool[]>(ToolsPage, {
  url: 'tool'
})
