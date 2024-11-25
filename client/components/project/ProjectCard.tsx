import { Project } from '@/state/api'
import React from 'react'

type Props = {
    project: Project;
}

const ProjectCard = ({project}: Props) => {
  return (
    <div className='bg-white shadow-md rounded border border-gray-400 p-2'>
        <p><span className='font-semibold'>Name: </span>{project.name}</p>
        <p><span className='font-semibold'>ID: </span>{project.id}</p>
        <p><span className='font-semibold'>Description: </span>{project.description}</p>
        <p><span className='font-semibold'>Start Date: </span>{project.startDate}</p>
        <p><span className='font-semibold'>End Date: </span>{project.endDate}</p>
    </div>
  )
}

export default ProjectCard