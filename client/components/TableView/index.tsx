import { useAppSelector } from '@/app/redux';
import { useGetTasksQuery } from '@/state/api';
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import React from 'react'

type Props = {
    id:string,
    setIsOpenModalTask: (isOpen:boolean) => void;
}

const TableView = ({id, setIsOpenModalTask}: Props) => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const {
    data:tasks, error, isLoading} = useGetTasksQuery({projectId: Number(id)})

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
      
  return (
    <div className='w-full px-3 py-2 lg:px-6'>
        <h1 className='font-bold text-2xl mb-3 dark:text-white'>
            Tasks Table View
        </h1>
        <div className='pt-2'>
            <DataGrid 
            columns={columns}
            rows={tasks}
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
        </div>
    </div>
  )
}

export default TableView