import React from 'react'
import { CircularProgress } from '@mui/material' 

const LoadingComponent = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen overflow-y-auto'>
        <CircularProgress size={70}/>
    </div>
  )
}

export default LoadingComponent