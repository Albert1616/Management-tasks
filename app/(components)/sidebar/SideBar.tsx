/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { Apple, Briefcase, ChevronDown, ChevronUp, Home, LockIcon, Search, Settings, User, Users, X } from 'lucide-react';
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux';
import { setIsSideBarCollapsed } from '@/state';
import SideBarIcon from './SideBarIcon';
import Link from 'next/link';

const SideBar = () => {
  const [showProjects, setShowProjects] = useState<boolean>(true); 
  const [showPriority, setShowPriority] = useState<boolean>(true); 

  const isSideBarCollapsed = useAppSelector((state) => state.global.isSideBarCollapsed);
  const dispatch = useAppDispatch();
  console.log(isSideBarCollapsed);

  return (
    <div className={`fixed flex flex-col h-full bg-white dark:bg-black
    transition-all duration-300 shadow-xl overflow-y-auto z-40
    ${isSideBarCollapsed? "w-64" : "w-0 hidden"}`}>
        {/*LOGO */}

        <div className='z-50 w-full min-h-[50px] flex items-center justify-between 
        bg-white px-6 pt-3 dark:bg-black'>
            <div className='font-bold text-xl text-gray-800 dark:text-white'>
                <Link href='/'>
                    TASKS
                </Link>
            </div>

            <button onClick={() => dispatch(setIsSideBarCollapsed(!isSideBarCollapsed))}><X /></button>
        </div>
        {/* TEAM */}
        <div className='flex gap-4 items-center border-y-[1.5px] px-6 py-4 border-gray-200'>
            <div className='font-extrabold text-5xl px-2 py-1 rounded bg-blue-500 text-white'>
                G
            </div>
            <div className='flex flex-col'>
                <h3 className='text-sm font-bold tracking-wide text-black dark:text-gray-200'>
                    ALBERT GROUP
                </h3>
                <div className='mt-1 flex flex-start gap-2'>
                    <LockIcon className='mt-[0.1rem] h-3 w-4 text-gray-500 dark:text-gray-200'/>
                    <p className='text-xs text-gray-500 dark:text-gray-100'>Private</p>
                </div>
            </div>
        </div>
        {/* NAVBAR LINKS */}
        <nav className='z-10 w-full'>
            <SideBarIcon label='Home' href='/' isCollapsed Icon={Home}/>
            <SideBarIcon label='Timeline' href='/timeline' isCollapsed Icon={Briefcase}/>
            <SideBarIcon label='Search' href='/search' isCollapsed Icon={Search}/>
            <SideBarIcon label='Settings' href='/settings' isCollapsed Icon={Settings}/>
            <SideBarIcon label='User' href='/user' isCollapsed Icon={User}/>
            <SideBarIcon label='Users' href='/users' isCollapsed Icon={Users}/>
        </nav>

        <button className='font-medium flex items-center justify-between px-6 py-2' 
        onClick={() => setShowProjects((prev) => !prev)}>
            <span className='text-gray-400'>Projects</span>
            {showProjects? (
                <ChevronUp className='w-6 y-6'/>
            ) : (
                <ChevronDown className='w-6 y-6'/>
            )}
        </button>
    </div>  )
}

export default SideBar;