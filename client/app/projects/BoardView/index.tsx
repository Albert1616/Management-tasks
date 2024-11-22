import { useGetTasksQuery, useUpdatedTaskStatusMutation } from '@/state/api';
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import {format} from 'date-fns'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {Task} from '@/state/api'
import React from 'react'
import { EllipsisVertical, MessageSquareMore, Plus } from 'lucide-react';
import Image from 'next/image';

type Props = { //PROPS TASK
    id: string,
    setIsOpenModalNewTask: (isOpen:boolean) => void;
}

const statusTask = [ // POSSIBLE STATUS FOR SOMETHING TASK
    "To Do", "Work In Progress", "Under Review", "Completed" //TASK STATUS
];

const BoardView = ({id, setIsOpenModalNewTask}: Props) => { // GENERAL BOARD
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
    // DND PROVIDER 
    <DndProvider backend={HTML5Backend}> 
        <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4'>
            {statusTask.map((status) => ( // FOR EACH TASK, RENDER A TASK COLUMN
                <TaskColumn
                key={status}
                status={status}
                tasks={tasks || []}
                moveTask={moveTask}
                setIsModalTaskOpen={setIsOpenModalNewTask}/>
            ))}    
        </div>
    </DndProvider>
  )
}

// PROPS OF THE TASK COLUMN
interface TaskColumnsProps{
    status:string,
    tasks: Task[],
    moveTask: (id:number, toStatus:string) => void,
    setIsModalTaskOpen: (isOpen:boolean) => void;
}

const TaskColumn = ({status, tasks, moveTask, setIsModalTaskOpen} : TaskColumnsProps) =>{
    const [{ isOver }, drop] = useDrop(() => ({ //DROP ZONE
        accept:"Task", // Items of type Task
        drop: (item: {id:number}) => moveTask(item.id, status), //Funtion to execute 
        collect: (monitor:any) =>({ // verify drop zone
            isOver: !!monitor.isOver()
    })
    }))

  const tasksCount = tasks?.filter((task) => task.status?.toLowerCase() === status.toLowerCase()).length;

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
    className={`rounded-lg py-2 ${isOver ? "bg-blue-100 dark:bg-blue-950":""}`}>
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
            <TaskItem key={task.id} task={task}/>
        ))}
    </div>
  )
}

interface TaskProps{
    task:Task
}

const TaskItem = ({task} : TaskProps) =>{
    const [{ isDragging }, drag ] = useDrag(() =>({
        type: "Task",
        item: {id: task.id},
        collect: (monitor:any) =>({ // verify drop zone
            isDragging: !!monitor.isDragging()
        })
    }))    
    const tags = task.tags ? task.tags.split(",") : [];

    const formattedStartDate = task.startDate ? format(new Date(task.startDate), "P") : "";
    const formattedDueDate = task.dueDate ? format(new Date(task.dueDate), "P") : "";

    const numberOfComments = task.comments ? task.comments.length : 0;

    const TaG = ({tag}:{tag: string}) =>(
        <div className={`rounded-full px-2 py-1 
        flex justify-center items-center text-[10px] font-bold
        ${tag === "Urgent" ? "bg-red-200 text-red-500"
            : tag === "High" ? "bg-yellow-200 text-yellow-600"
            : tag === "Medium" ? "bg-green-200 text-green-500"
            : tag === "Low" ? "bg-blue-200 text-blue-500" : 
            "bg-gray-400 text-gray-200"}`}>
                {tag}
        </div>
    )
    return(
        <div ref={(instance) => {drag(instance)}}
        className={`flex flex-col gap-2 w-full px-2 py-1 bg-white shadow-sm rounded-md
        mt-2 ${isDragging ? "opacity-50" : "opacity-100"}`}>
            {task.attachments && task.attachments.length > 0 &&(
                <Image
                 src={`/${task.attachments[0].fileURL}`}
                 alt={task.attachments[0].fileName}
                 width={400}
                 height={200}
                 className='h-auto'/>
            )}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    {task.priority&& <TaG tag={task.priority} key={task.title}/>}
                    {task.tags && tags.map((tag) => <TaG tag={tag} key={task.title}/>)}
                </div>

                <div className='flex items-center'>
                    <button>
                        <EllipsisVertical size={15}/>
                    </button>
                </div>
            </div>

            <h3 className='font-bold text-[14px] text-left'>{task.title}</h3>
            <p className='font-semibold text-[12px] text-gray-500'>
                {formattedStartDate} - {formattedDueDate}</p>
            <p className='font-bold text-sm'>{task.description}</p>

            <div className='mt-3 border-t border-gray-300'>
                <div className='flex items-center justify-between mt-2'>
                    <div className='flex -space-x-[6px] overflow-hidden'>
                        {task.author&& (
                            <Image 
                             src={`/${task.author.profilePictureUrl}`}
                             alt={task.author.username}
                             width={30}
                             height={30}
                             className='rounded-full w-10 h-10 border-2 border-white
                             object-cover dark:border-dark-secondary'/>
                        )}
                        {task.assignee&& (
                            <Image 
                             src={`/${task.assignee.profilePictureUrl}`}
                             alt={task.assignee.username}
                             width={30}
                             height={30}
                             className='rounded-full w-10 h-10 border-2 border-white
                             object-cover dark:border-dark-secondary'/>
                        )}
                    </div>
                    <div className='flex items-center gap-1'>
                        <MessageSquareMore size={18}/>
                        <span className='text-lg font-semibold'>
                            {numberOfComments}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BoardView;