import { useGetTasksQuery } from '@/state/api'
import React from 'react'
import TaskCard from './TaskCard'
import LoadingComponent from '@/components/LoadingComponent';
import ErrorComponent from '@/components/ErrorComponent';

type Props = {
    id:string,
    setIsOpenModalNewTask: (isOpen:boolean) => void;
}


const ListView = ({id, setIsOpenModalNewTask}: Props) => {
  const {data: tasks, isLoading, error} = useGetTasksQuery({projectId: Number(id)})

  if(isLoading) return <LoadingComponent />
  if (error) return <ErrorComponent message="Error to retring tasks"/>
  return (
    <div className='px-3 py-2'>
        <div className='w-full flex items-center justify-between'>
          <h1 className='font-bold text-2xl mb-3 dark:text-white'>
            List Tasks
          </h1>

          <button className='py-1 px-3 text-white font-bold rounded bg-blue-600 hover:bg-blue-800'
          onClick={() => setIsOpenModalNewTask(true)}>
            Add Task +
          </button>
        </div>
        <div className='h-full w-full grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-4 gap-4'>
            {tasks?.map((task) => <TaskCard task={task} key={task.id}/>)}
        </div>
    </div>
  )
}

export default ListView