'use client'

import { Group, LockIcon } from 'lucide-react';
import React, { useState } from 'react'

const SideBar = () => {
  const [showProjects, setShowProjects] = useState<boolean>(true); 
  const [showPriority, setShowPriority] = useState<boolean>(true); 

  return (
    <div className='fixed flex flex-col h-full w-48 bg-white dark:bg-black
    transition-all duration-300 shadow-xl overflow-y-auto z-40'>
        {/*LOGO */}

        <div className='z-50 w-full min-h-[50px] flex items-center justify-between 
        bg-white px-6 pt-3 dark:bg-black'>
            <div className='font-bold text-xl text-gray-800 dark:text-white'>
                TASKS
            </div>
        </div>
        {/* TEAM */}
        <div className='flex gap-4 items-center justify-between border-y-[1.5px] px-3 py-4 border-gray-200'>
            <div className='font-extrabold text-5xl px-2 py-1 rounded bg-blue-500 text-white'>
                G
            </div>
            <div className='flex flex-col'>
                <h3 className='text-sm font-bold tracking-wide text-black dark:text-gray-200'>
                    ALBERT GROUP
                </h3>
                <div className='mt-1 flex flex-start gap-2'>
                    <LockIcon className='mt-[0.1rem] h-3 w-4 text-gray-500 dark:text-gray-400'/>
                    <p className='text-xs text-gray-500'>Private</p>
                </div>
            </div>
        </div>
    </div>  )
}

export default SideBar;