import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
const Processing = () => {
  return (
    <div className="text-gray-500 w-full h-full flex justify-center items-center">
      <FontAwesomeIcon icon={faCircleNotch} className="animate-spin"></FontAwesomeIcon>
      <span className="text-gray-700 ml-2">loading...</span>
    </div>    
  )
}

export default Processing