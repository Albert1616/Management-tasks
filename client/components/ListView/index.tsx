import { useGetTasksQuery } from '@/state/api'
import React from 'react'
import TaskCard from './TaskCard'

type Props = {
    id:string
}


const ListView = ({id}: Props) => {
  const {data: tasks, isLoading, error} = useGetTasksQuery({projectId: Number(id)})

  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error while fetchin tasks</div>
  return (
    <div className='px-3 py-2'>
        <h1 className='font-bold text-2xl mb-3 dark:text-white'>
            ListView
        </h1>
        <div className='h-full w-full grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-4 gap-4'>
            {tasks?.map((task) => <TaskCard task={task}/>)}
        </div>
    </div>
  )
}

export default ListView