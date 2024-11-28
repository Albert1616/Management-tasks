'use client'

import { useGetTeamsQuery } from '@/state/api'
import { DataGrid, GridColDef, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton } from '@mui/x-data-grid';
import React from 'react'
import { useAppSelector } from '../redux';
import LoadingComponent from '@/components/LoadingComponent';
import ErrorComponent from '@/components/ErrorComponent';

const CustomToolBar = () =>(
    <GridToolbarContainer className='toolbar flex gap-2'>
        <GridToolbarFilterButton />
        <GridToolbarExport />
    </GridToolbarContainer>
)

const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'Team Id',
      width: 100,
    },
    {
      field: 'teamName',
      headerName: 'Team Name',
      width: 150,
    },
    {
      field: 'productOwnerUserId',
      headerName: 'product Owner User Id',
      width: 100,
    },
    {
      field: 'projectManagerUserId',
      headerName: 'project Manager User Id',
      width: 100,
    },
]

const Teams = () => {

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const {
    data:teams, isLoading, isError
  } = useGetTeamsQuery();

  if (isLoading) return <LoadingComponent />
  if(isError) return <ErrorComponent message='error to fething teams'/>
  return (
    <div className='p-4'>
        <h1 className='font-bold text-2xl mb-3 dark:text-white'>
            Teams
        </h1>   

        <DataGrid 
            columns={columns}
            rows={teams}
            getRowId={(row) => row.id}
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

export default Teams