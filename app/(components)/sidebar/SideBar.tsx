'use client'

import { Group, LockIcon, X } from 'lucide-react';
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux';
import { setIsSideBarCollapsed } from '@/state';

const SideBar = () => {
  const [showProjects, setShowProjects] = useState<boolean>(true); 
  const [showPriority, setShowPriority] = useState<boolean>(true); 

  const isSideBarCollapsed = useAppSelector((state) => state.global.isSideBarCollapsed);
  const dispatch = useAppDispatch();

  return (
    <div className={`${isSideBarCollapsed? "w-64" : "w-0 hidden"} fixed flex flex-col h-full bg-white dark:bg-black
    transition-all duration-300 shadow-xl overflow-y-auto z-40`}>
        {/*LOGO */}

        <div className='z-50 w-full min-h-[50px] flex items-center justify-between 
        bg-white px-6 pt-3 dark:bg-black'>
            <div className='font-bold text-xl text-gray-800 dark:text-white'>
                TASKS
            </div>

            <button onClick={() => dispatch(setIsSideBarCollapsed(!isSideBarCollapsed))}><X /></button>
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