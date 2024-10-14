import React from 'react'
import { Search, Settings } from 'lucide-react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between bg-white px-4 py-3 dark:bg-black'>
        <div className='flex gap-8 items-center outline-none'>
            <div className='relative flex h-min w-[200px]'>
                <Search className='absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 
                transform cursor-pointer dark:text-white'/>
                <input className='w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700
                dark:text-white dark:placeholder-white' type="search" placeholder='Search..' />
            </div>
        </div>

        {/* ICONS*/}
        <div className='flex items-center'>
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