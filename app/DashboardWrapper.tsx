import React from 'react'
import NavBar from './(components)/NavBar'

const DashboardWrapper = ({children} : {children:React.ReactNode}) => {
  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
        sidebar
        <main className='dark:bg-dark-bg flex w-full flex-col bg-gray-50 md:pl-64'>
            <NavBar />
            {children}
        </main>
    </div>
  )
}

export default DashboardWrapper