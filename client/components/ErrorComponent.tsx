import Image from 'next/image'
import React from 'react'

type Props = {
    message: string
}

const ErrorComponent = ({message}: Props) => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className='flex flex-col items-center gap-5 md:flex-row md:gap-8'>
            <h2 className='text-xl flex flex-col dark:text-white'><span className='text-2xl font-bold'>ERROR: </span>{message}</h2>
            <Image
            src="/server-error.png"
            alt='Image error server'
            width={400}
            height={300}
            />
        </div>
    </div>
  )
}

export default ErrorComponent