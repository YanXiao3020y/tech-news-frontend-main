export default function ErrorPage({error}: {
  error: string
}) {
  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <div className="p-5 bg-white rounded-2xl flex justify-center items-center shadow-lg">
        Error: {error}
      </div>
    </div>
  )
}
