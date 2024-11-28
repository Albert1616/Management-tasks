'use client'

import { useGetProjectsQuery } from '@/state/api';
import { DisplayOption, Gantt, ViewMode } from 'gantt-task-react';
import React, { useMemo, useState } from 'react'
import { useAppSelector } from '../redux';
import "gantt-task-react/dist/index.css"
import LoadingComponent from '@/components/LoadingComponent';
import ErrorComponent from '@/components/ErrorComponent';


type Props = {}

type ProjectGanttTypes = "task" | "milestone" | "project";

const TimeLine = (props: Props) => {
  const isDarkMode = useAppSelector((state) =>state.global.isDarkMode);
  const {data:projects, isLoading, error} = useGetProjectsQuery();

  const [displayOptions, setDisplayOptions] = useState<DisplayOption>({
    viewMode: ViewMode.Month,
    locale: "en-US"
  });

  const handleViewMode = (
    e:React.ChangeEvent<HTMLSelectElement>
  ) =>{
    setDisplayOptions((prev) => ({
     ...prev,
     viewMode: e.target.value as ViewMode   
    }))
  }

  const ganttProjects = useMemo(() =>{
    return (
        projects?.map((project) =>({
            start: new Date(project.startDate as string),
            end: new Date(project.endDate as string),
            name: project.name,
            id: `Project-${project.id}`,
            type:'project' as ProjectGanttTypes,
            progress: 50,
            isDisabled: false,
        }))
    ) || []
  }, [projects])

  if (isLoading) return <LoadingComponent />
  if(error) return <ErrorComponent message='Error to retrieve projects timeline'/>

  return (
    <div className='p-4'>
        <div className='flex items-center justify-between py-6'>
            <h1 className='font-bold text-2xl mb-3 dark:text-white'>
                Project TimeLine
            </h1>

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

        <div className='overflow-hidden shadow-md rounded'>
            <div className='timeline'>
                <Gantt 
                tasks={ganttProjects}
                viewMode={displayOptions.viewMode}
                columnWidth={displayOptions.viewMode === "Month" ? 150 : 100}
                projectBackgroundColor={isDarkMode ? "#101214" : "#1f2937"}
                projectProgressColor={isDarkMode ? "#1f2937" : "#aeb8c2"}
                projectProgressSelectedColor={isDarkMode ? "#000" : "#9ba1a6"}
                />
            </div>
        </div>
    </div>
  )
}

export default TimeLine