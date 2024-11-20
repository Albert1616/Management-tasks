'use client'

import { useAppSelector } from '@/app/redux';
import { useGetTasksQuery } from '@/state/api';
import React, { useMemo, useState } from 'react'
import { DisplayOption, Gantt, ViewMode } from 'gantt-task-react'
import "gantt-task-react/dist/index.css"

type Props = {
    id:string,
    setIsOpenModalTask: (isOpen:boolean) => void;
}

type TaskGanttTypes = "task" | "milestone" | "project";

const TimeLine = ({id, setIsOpenModalTask}: Props) => {

  //get the state to darkMode
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  //get tasks to DataBase
  const {
    data:tasks, error, isLoading} = useGetTasksQuery({projectId: Number(id)})

  const [displayOptions, setDisplayOptions] = useState<DisplayOption>({
    viewMode: ViewMode.Month,
    locale: "en-US",
  })

  const ganttTasks = useMemo(() =>{
    return (
      tasks?.map((task) =>({
        name: task.title,
        start: new Date(task.startDate as string),
        end: new Date(task.dueDate as string),
        type: "task" as TaskGanttTypes,
        id: `Task-${task.id}`,
        progress: task.points ? task.points : 0,
        isDisable: false
      })) || []
    )
  }, [tasks])

  const handleViewMode = (
    event:React.ChangeEvent<HTMLSelectElement>
  ) =>{
    setDisplayOptions((prev) =>({
      ...prev,
      viewMode: event.target.value as ViewMode
    }))
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error to get task timeline</div>

  return (
    <div className='px-3 lg:px-6'>
      <div className="flex items-center justify-between gap-2 py-5">
        <h1 className='font-bold text-xl mb-3 dark:text-white'>Project Tasks TimeLine</h1>

        <div className='relative inline-block w-64'>
          <select id="select-viewmode" value={displayOptions.viewMode}
          className="rounded border w-full p-1 flex items-center
          justify-center text-center font-bold shadow bg-gray-200
          focus:outline-none dark:bg-white dark:text-dark-secondary"
          onChange={handleViewMode}>
            <option value={ViewMode.Day}>Day</option>
            <option value={ViewMode.Week}>Week</option>
            <option value={ViewMode.Month}>Month</option>
          </select>
        </div>
      </div>

      <div className='overflow-hidden shadow rounded-md'>
        <div className='timeline'>
          <Gantt 
          tasks={ganttTasks}
          viewMode={displayOptions.viewMode}
          columnWidth={displayOptions.viewMode === "Month" ? 150 : 100}
          barBackgroundColor={isDarkMode ? "#101214" : "#aeb8c2"}
              barBackgroundSelectedColor={isDarkMode ? "#000" : "#9ba1a6"}
          />
        </div>
      </div>

      <div className='pt-5 px-3'>
        <button 
        className='px-3 py-2 text-white font-semibold text-[14px] rounded bg-blue-600 hover:bg-blue-800 flex items-center justify-center'
        onClick={() => setIsOpenModalTask(true)}>
          Add new task +
        </button>
      </div>
    </div>
  )
}

export default TimeLine