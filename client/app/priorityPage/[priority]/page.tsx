'use client'

import { Priority, useGetTasksByUserQuery } from '@/state/api'
import React, { useState } from 'react'
import { useAppSelector } from '../../redux'
import ModalNewTask from '@/components/ModalNewTask'
import TaskCard from '@/app/projects/ListView/TaskCard'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import LoadingComponent from '@/components/LoadingComponent'
import ErrorComponent from '@/components/ErrorComponent'
import { parseArgs } from 'util'
import { parseDomainOfCategoryAxis } from 'recharts/types/util/ChartUtils'

type Props = {
    params:{
      priority:Priority
    }
}

const columns: GridColDef[] = [
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    editable: true,
    renderCell: (params) => (
      <span className='rounded bg-green-200 font-bold text-dark-secondary px-1 py-1'>{params.value}</span>
    )
  },
  {
    field: 'tags',
    headerName: 'Tags',
    description: 'Tags for the task',
    resizable:true
  },
  {
      field: 'startDate',
      headerName: 'startDate',
      width:150
  },
  {
      field: 'dueDate',
      headerName: 'dueDate',
      width: 150
  },
  {
      field: 'author',
      headerName: 'Author',
      width: 150,
      renderCell: (params) => params.value.username || "Unknown"
  },
  {
      field: 'assignee',
      headerName: 'Assignee',
      width: 150,
      renderCell: (params) => params.value.username || "Unknown"
  },

];

const PriorityPage = ({params}: Props) => {
  const [view, setView] = useState("list");
  const [isOpenModalNewTask, setIsOpenModalNewTask] = useState(false);

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode );
  const {
    data:tasks, isError, isLoading
  } = useGetTasksByUserQuery(1)

  const tasksPriority = tasks?.filter((task) => task.priority === params.priority) || [];

  const handleView = (view:string) =>{
    setView(view);
  }

  if (isLoading) return <LoadingComponent />
  if (isError) return <ErrorComponent message="Error to retring task's user"/>
  return (
    <div className='p-6'>
      <ModalNewTask
      isOpen={isOpenModalNewTask}
      isClose={() => setIsOpenModalNewTask(false)}/>

      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-3xl mb-3 dark:text-white'>
          Priority Page
        </h1>

        <button className='rounded py-1 px-3 font-bold text-lg text-white bg-blue-600 hover:bg-blue-800'
        onClick={() => setIsOpenModalNewTask(true)}>
          New Task +
        </button> 
      </div>

      <div>
        <div className='flex items-center gap-2'>
          <button className='rounded px-16 py-1 text-lg font-bold bg-gray-400 hover:bg-gray-500'
          onClick={() => handleView("list")}>
            List
          </button>

          <button className='rounded px-16 py-1 text-lg font-bold bg-gray-400 hover:bg-gray-500'
          onClick={() => handleView("table")}>
            Table
          </button>
        </div>

        <div className='mt-8'>
          {view === "list" ? (
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4'>
              {tasksPriority.length > 0 ? tasksPriority.map((task) => (
              <TaskCard task={task}/>)) : <h2 className='font-semibold text-lg dark:text-white'>No have tasks with priority <span className='font-bold'>{params.priority}</span></h2>}
            </div>
          )
          :tasksPriority.length > 0 ?(
          <DataGrid 
          columns={columns}
          rows={tasksPriority}
          disableRowSelectionOnClick
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
          }}/>
          )
          : <h2 className='font-semibold text-lg dark:text-white'>No have tasks with priority <span className='font-bold'>{params.priority}</span></h2>
          }
        </div>
      </div>
    </div>
  )
}

export default PriorityPage