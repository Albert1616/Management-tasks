import { Task } from '@/state/api'
import { format } from 'date-fns';
import Image from 'next/image';
import React from 'react'

type Props = {
    task: Task;
}

const TaskCard = ({task}: Props) => {
  const startDateFormatted = task.startDate ? format(task.startDate, "P") : "not informed";
  const dueDateFormatted = task.dueDate ? format(task.dueDate, "P") : "not informed";
  return (
    <div className='bg-white shadow-lg w-full flex flex-col gap-3
    rounded-md px-4 py-2'>
        {task.attachments && task.attachments.length > 0 &&(
            task.attachments.map((att) => (
                <Image
                src={`/${att.fileURL}`}
                alt={att.fileName}
                width={400}
                height={200}
                className='rounded-md h-auto w-full'/>
            ))
        )}
        <h2 className='font-bold text-lg'>{task.title}</h2>
        <p className='text-[14px] flex flex-wrap gap-2 font-medium'><strong>Id:</strong>{task.id}</p>
        <p className='text-[14px] flex flex-wrap gap-2 font-medium'><strong>Description:</strong>{task.description}</p>
        <p className='text-[14px] flex flex-wrap gap-2 font-medium'><strong>Status:</strong>{task.status}</p>
        <p className='text-[14px] flex flex-wrap gap-2 font-medium'><strong>Tags:</strong>{task.tags}</p>
        <p className='text-[14px] flex flex-wrap gap-2 font-medium'><strong>Start date:</strong>{startDateFormatted}</p>
        <p className='text-[14px] flex flex-wrap gap-2 font-medium'><strong>Due date:</strong>{dueDateFormatted}</p>
        <p className='text-[14px] flex flex-wrap gap-2 font-medium'><strong>Assingnee:</strong>{task.author?.username}</p>
        <p className='text-[14px] flex flex-wrap gap-2 font-medium'><strong>Author:</strong>{task.assignee?.username}</p>
    </div>
  )
}

export default TaskCard