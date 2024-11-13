import { useGetTasksQuery, useUpdatedTaskStatusMutation } from '@/state/api';
import { DndProvider, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {Task} from '@/state/api'
import React from 'react'
import { EllipsisVertical, Plus } from 'lucide-react';

type Props = { //PROPS TASK
    id: string,
    setIsOpenModalTask: (isOpen:boolean) => void;
}

const statusTask = [
    "To Do", "Work In Progress", "Under Review", "Completed" //TASK STATUS
];

const BoardView = ({id, setIsOpenModalTask}: Props) => {
  const {
    data: tasks, isLoading, error
  } = useGetTasksQuery({projectId: Number(id)}); //GET TASK FOR THE ESPECIFY ID

  const [updateStatus] = useUpdatedTaskStatusMutation(); //ATRIBUTE UPDATESTATUS FOR MUTATION 

  const moveTask = (id:number, toStatus:string) =>{ //MOVE TASK FUNCTION TO DND
    updateStatus({taskId: id, status: toStatus});
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error to fetching tasks</div>

  return (
    <DndProvider backend={HTML5Backend}>
        <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4'>
            {statusTask.map((status) => (
                <TaskColumn
                key={status}
                status={status}
                tasks={tasks || []}
                moveTask={moveTask}
                setIsModalTaskOpen={setIsOpenModalTask}/>
            ))}    
        </div>
    </DndProvider>
  )
}

interface TaskColumnsProps{
    status:string,
    tasks: Task[],
    moveTask: (id:number, toStatus:string) => void,
    setIsModalTaskOpen: (isOpen:boolean) => void;
}

const TaskColumn = ({status, tasks, moveTask, setIsModalTaskOpen} : TaskColumnsProps) =>{
    const [{ isOver }, drop] = useDrop(() => ({
        accept:"Task",
        drop: (item: {id:number}) => moveTask(item.id, status),
        collect: (monitor:any) =>({
            isOver: !!monitor.isOver()
    })
    }))

  const tasksCount = tasks?.filter((task) => task.status === status).length;

  const statusColor:any = {
    "To Do":"#3EB256",
    "Work In Progress":"#059669",
    "Under Review":"#D97706",
    Completed:"#000000"
  }

  return (
    <div ref={(instance) => {
      drop(instance)  
    }}
    className='rounded-lg py-2'>
        <div className='flex w-full'>
            <div className={`w-2 rounded-s-lg`}
            style={{backgroundColor:statusColor[status]}}/>
            <div className='flex items-center justify-between w-full bg-white shadow-sm rounded-e-lg p-3'>
                <h3 className='flex items-center text-lg justify-center font-semibold'>
                    {status}
                    <span className='bg-gray-200 text-center text-sm leading-none p-1 rounded-full ml-2'>
                        {tasksCount}
                    </span>
                </h3>

                <div className='flex items-center gap-1'>
                    <button  className='flex items-center justify-center w-6 h-6 dark:text-neutral-500'>
                        <EllipsisVertical size={20}/>
                    </button>

                    <button className='flex items-center justify-center w-6 h-6 bg-gray-200 rounded-lg p-1 dark:text-neutral-500'
                    onClick={() => setIsModalTaskOpen(true)}>
                        <Plus size={16}/>
                    </button>
                </div>
            </div>
        </div>
        {tasks.filter((task) => task.status === status).map((task) =>(
            <Task key={task.id} task={task}/>
        ))}
    </div>
  )
}

interface TaskProps{
    task:Task
}

const Task = ({task} : TaskProps) =>{
      
}


export default BoardView;