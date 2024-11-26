'use client'

import { Priority, Project, Status, Task, useGetProjectsQuery, useGetTasksQuery } from '@/state/api'
import React from 'react'
import { useAppSelector } from '../redux';

type Props = {}

const HomePage = (props: Props) => {

  const {
    data:tasks, 
    isLoading:tasksLoading, 
    isError:tasksError} = useGetTasksQuery({projectId: parseInt("1")});


  const {
    data:projects, 
    isLoading:projectsLoading, 
    isError:projectsError} = useGetProjectsQuery();

    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    
    if (tasksLoading || projectsLoading) return <div>Loading...</div>
    if (tasksError || !tasks || !projects || projectsError) return <div>Error to retriving tasks or projects</div> 

    const priorityCount = tasks.reduce((acc: Record<string, number>, task:Task) =>{
        const priority = task.priority;
        acc[priority as Priority] = (acc[priority as Priority] || 0) + 1;
        return acc;
    }, {},);

    const taskDistribution = Object.keys(priorityCount).map((key) => ({
        name:key,
        count:priorityCount[key],
    }))

    const statusCount = projects.reduce((acc: Record<string, number>, project:Project) => {
        const status = project.endDate ? "Completed" : "Active";
        acc[status] = (acc[status] || 0) + 1;
        return acc;
    },{})

    console.log(taskDistribution);
    return (
    <div>HomePage</div>
  )
}

export default HomePage