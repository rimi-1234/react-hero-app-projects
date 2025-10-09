import React from 'react'
import { PacmanLoader } from 'react-spinners'

const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center h-[calc(100vh-285px)]'>
      <span className='text-5xl text-purple-700 flex '>L<PacmanLoader className='animate-spin' color={'purple'}></PacmanLoader>ading </span>
    </div>
  )
}

export default LoadingSpinner