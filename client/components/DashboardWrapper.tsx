"use client"

import React, { useEffect } from 'react'
import NavBar from './NavBar'
import SideBar from './sidebar/SideBar'
import StoreProvider, { useAppSelector } from '../app/redux'

const DashboardLayout = ({children} : {children:React.ReactNode}) => {
  const isSideBarCollapsed = useAppSelector((state) => state.global.isSideBarCollapsed);
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if(isDarkMode){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  })

  return (
      <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
          <SideBar />
          <main className={`dark:bg-dark-bg flex w-full flex-col bg-gray-50`}>
              <NavBar />
              {children}
          </main>
      </div>
  )
}

const DashboardWrapper = ({children} : {children:React.ReactNode}) => {
  return(
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  )
    
}


export default DashboardWrapper