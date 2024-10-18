import React from 'react'
import { Menu, Moon, Search, Settings, Sun } from 'lucide-react'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../redux'
import { setIsDarkMode, setIsSideBarCollapsed } from '@/state'

const NavBar = () => {
  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector((state) => state.global.isSideBarCollapsed);
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <div className='flex items-center justify-between bg-white px-4 py-3 dark:bg-black'>
        <div className='flex gap-8 items-center outline-none'>
          {!isSideBarCollapsed ? null : (
            <button onClick={() => {dispatch(setIsSideBarCollapsed(!isSideBarCollapsed))}}>
              <Menu className='w-8 h-8 dark:text-white' />
            </button>
          )}
            <div className='relative flex h-min w-[200px]'>
                <Search className='absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 
                transform cursor-pointer dark:text-white'/>
                <input className='w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700
                dark:text-white dark:placeholder-white' type="search" placeholder='Search..' />
            </div>
        </div>

        {/* ICONS*/}
        <div className='flex items-center'>
          <button onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
            className={`rounded p-2 ${isDarkMode? "dark:hover:bg-gray-700" : "hover:bg-gray-100"}`}>
              {isDarkMode? (
                <Sun className='w-6 h-6 cursor-pointer dark:text-white'/>
              ) : (
                <Moon className='w-6 h-6 cursor-pointer dark:text-white'/>
              )}
          </button>
          <Link href='/settings'
          className='w-min h-min rounded p-2 hover:bg-gray-100'>
            <Settings className='w-6 h-6 cursor-pointer dark:text-white'/>
          </Link>
          <div className='hidden w-[0.1rem] min-h-[2rem] bg-gray-200 md:inline-block'/>
        </div>
    </div>
  )
}

export default NavBar

{/*
  h-min: menor espaço possível para caber todo o conteúdo
  
  */}