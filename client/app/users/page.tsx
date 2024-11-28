'use client'

import { useGetUsersQuery } from '@/state/api'
import React from 'react'
import { DataGrid, GridColDef, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton } from '@mui/x-data-grid'
import { useAppSelector } from '../redux'
import Image from 'next/image'
import LoadingComponent from '@/components/LoadingComponent'
import ErrorComponent from '@/components/ErrorComponent'

type Props = {}

const CustomToolBar = () =>(
    <GridToolbarContainer className='toolbar flex gap-2'>
        <GridToolbarFilterButton />
        <GridToolbarExport />
    </GridToolbarContainer>
)


const Users = (props: Props) => {

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const {
    data:users, isLoading, isError} = useGetUsersQuery()
    const columns: GridColDef[] = [
        {
          field: 'userId',
          headerName: 'ID',
          width: 80,
        },
        {
          field: 'username',
          headerName: 'Username',
          width: 150,
        },
        {
          field: 'profilePictureUrl',
          headerName: 'Profile Picture',
          width: 120,
          renderCell: (params) => (
            <div className="flex h-full w-full items-center justify-center">
              <div className="h-9 w-9">
                <Image
                  src={`/${params.value}`}
                  alt={params.row.username}
                  width={100}
                  height={50}
                  className="h-full rounded-full object-cover"
                />
              </div>
            </div>
          ),
        },
        {
          field: 'teamId',
          headerName: 'Team ID',
          width: 80,
        },
    ]

  if (isLoading) return <LoadingComponent />
  if(isError) return <ErrorComponent message='Error to fetching users'/>
  return (
    <div className='p-4'>
        <h1 className='font-bold text-2xl mb-3 dark:text-white'>
            Users
        </h1>   

        <DataGrid 
            columns={columns}
            rows={users}
            getRowId={(row) => row.userId}
            pagination
            slots={{
                toolbar: CustomToolBar
            }}
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
  )
}

export default Users