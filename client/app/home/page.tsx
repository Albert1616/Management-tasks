'use client'

import { Priority, Project, Status, Task, useGetProjectsQuery, useGetTasksQuery } from '@/state/api'
import React from 'react'
import { useAppSelector } from '../redux';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { CartesianGrid, ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, Bar, Pie, Cell, PieChart } from 'recharts';
import LoadingComponent from '@/components/LoadingComponent';
import ErrorComponent from '@/components/ErrorComponent';

const taskColumns: GridColDef[] = [
  {
    field: "title",
    headerName: "Title",
    width: 200
  },
  {
    field: "status",
    headerName: "Status",
    width: 150
  },
  {
    field: "priority",
    headerName: "Priority",
    width: 150
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    width: 150
  },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const HomePage = () => {

  const {
    data:tasks, 
    isLoading:tasksLoading, 
    isError:tasksError} = useGetTasksQuery({projectId: parseInt("1")});


  const {
    data:projects, 
    isLoading:projectsLoading, 
    isError:projectsError} = useGetProjectsQuery();

    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    
    if (tasksLoading || projectsLoading) return <LoadingComponent />
    if (tasksError || !tasks || !projects || projectsError) return <ErrorComponent message='Error to retriving tasks or projects'/> 

    const priorityCount = tasks.reduce((acc: Record<string, number>, task:Task) =>{
        const priority = task.priority;
        acc[priority as Priority] = (acc[priority as Priority] || 0) + 1;
        return acc;
    }, {},);

    const taskDistribution = Object.keys(priorityCount).map((key) => ({
        name:key,
        count:priorityCount[key],
    }));

    const statusCount = projects.reduce((acc: Record<string, number>, project:Project) => {
        const status = project.endDate ? "Completed" : "Active";
        acc[status] = (acc[status] || 0) + 1;
        return acc;
    },{});

    const projectStatus = Object.keys(statusCount).map((key) =>({
      name: key,
      count: statusCount[key]
    }))

    const chartColors = isDarkMode
    ? {
        bar: "#8884d8",
        barGrid: "#303030",
        pieFill: "#4A90E2",
        text: "#FFFFFF",
      }
    : {
        bar: "#8884d8",
        barGrid: "#E0E0E0",
        pieFill: "#82ca9d",
        text: "#000000",
      };

    return (
    <div className='container h-full w-full bg-gray-100 bg-transparent p-4 md:mx-auto'>
      <h1 className='font-bold text-2xl mb-3 dark:text-white'>
        Project Management DashBoard
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='bg-white rounded-lg p-4 shadow dark:bg-dark-secondary'>
          <h3 className='text-lg font-semibold dark:text-white'>
            Task Piority Distribution
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={taskDistribution}>
              <CartesianGrid strokeDasharray="3 3"
              stroke={chartColors.barGrid} />
              <XAxis dataKey="name" stroke={chartColors.text}/>
              <YAxis stroke={chartColors.text}/>
              <Tooltip contentStyle={{
                width: "min-content",
                height : "min-content"
              }}/>
              <Legend />
              <Bar dataKey="count" fill={chartColors.bar}/>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className='bg-white rounded-lg p-4 shadow dark:bg-dark-secondary'>
          <h3 className='text-lg font-semibold dark:text-white'>
              Project Status
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie dataKey="count" data={projectStatus} fill='#82ca9d' label>
                {projectStatus.map((entry, index) =>(
                  <Cell 
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className='bg-white rounded-lg p-4 shadow dark:bg-dark-secondary md:col-span-2'>
          <h3 className='text-lg font-semibold dark:text-white'>
            Your Tasks
          </h3>

          <div className='h-[300px], w-full'>
            <DataGrid
            rows={tasks}
            columns={taskColumns}
            checkboxSelection
            loading={tasksLoading}
            getRowClassName={() => "data-grid-row"}
            getCellClassName={() => "data-grid-cell"}
            className='border border-gray-200 bg-white shadow select-none 
            dark:border-stroke dark:bg-dark-secondary dark:text-gray-100'
            sx={{
                "& .MuiDataGrid-columnHeaders": {
                color: `${isDarkMode ? "#e5e7eb" : ""}`,
                '& [role="row"] > *': {
                    backgroundColor: `${isDarkMode ? "#1d1f21" : "white"}`,
                    borderColor: `${isDarkMode ? "#2d3135" : ""}`,
                },
                },
                "& .MuiIconbutton-root": {
                color: `${isDarkMode ? "#a3a3a3" : ""}`,
                },
                "& .MuiTablePagination-root": {
                color: `${isDarkMode ? "#a3a3a3" : ""}`,
                },
                "& .MuiTablePagination-selectIcon": {
                color: `${isDarkMode ? "#a3a3a3" : ""}`,
                },
                "& .MuiDataGrid-cell": {
                border: "none",
                },
                "& .MuiDataGrid-row": {
                borderBottom: `1px solid ${isDarkMode ? "#2d3135" : "e5e7eb"}`,
                },
                "& .MuiDataGrid-withBorderColor": {
                borderColor: `${isDarkMode ? "#2d3135" : "e5e7eb"}`,
                },
            }}
            /> 
          </div>
        </div>
      </div>  
    </div>
  )
}

export default HomePage