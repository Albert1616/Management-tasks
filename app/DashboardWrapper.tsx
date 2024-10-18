"use client"

import React, { useEffect } from 'react'
import NavBar from './(components)/NavBar'
import SideBar from './(components)/sidebar/SideBar'
import StoreProvider, { useAppSelector } from './redux'

const DashboardLayout = ({children} : {children:React.ReactNode}) => {
  const isSideBarCollapsed = useAppSelector((state) => state.global.isSideBarCollapsed);
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    isDarkMode? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
  }, [isDarkMode])

  return (
      <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
          <SideBar />
          <main className={`dark:bg-dark-bg flex w-full flex-col bg-gray-50 ${isSideBarCollapsed? '': 'md:pl-64'}`}>
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