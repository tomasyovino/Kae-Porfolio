import Loader from 'react-dots-loader'
import 'react-dots-loader/index.css'

const Loading = () => {
  return (
    <div className='loader-container row align-items-center'>
      <Loader size={20} distance={30} visible={true} color={"white"} />
    </div>
  )
}

export default Loading