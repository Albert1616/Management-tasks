import ProjectHeader from '@/components/project/ProjectHeader'
import React from 'react'

type Props = {
    params: {
        id: string
    }
}

const page = ({params}: Props) => {
  return (
    <div className='pt-3 px-2'>
      <ProjectHeader title="Product Desing Development"/>
    </div>
  )
}

export default page