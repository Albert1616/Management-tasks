'use client'

import { Clock, Filter, Grid3X3, List, Share, Table } from 'lucide-react';
import React from 'react'

interface Props{
    title:string,
    activeTab:string,
    setActiveTab: (tab:string) => void;
}

const ProjectHeader = ({title, activeTab, setActiveTab}: Props) => {
  return (
    <div className='px-3 lg:px-6'>
        <div className='flex w-full items-center justify-between'>
            <h1 className='text-2xl md:text-3xl font-bold dark:text-white'>{title}</h1>
            <button className='p-2 rounded bg-blue-400 text-white text-lg font-semibold'>New Board+</button>
        </div>
        <div className='flex flex-col sm:flex-row-reverse sm:justify-between mt-5 py-3 gap-5 border-y border-gray-200 w-full
        dark:border-gray-400'>
            <div className='flex gap-2'>
                <button>
                    <Filter className='w-5 h-5'/>
                </button>

                <button>
                    <Share className='w-5 h-5'/>
                </button>

                <div className='relative'>
                    <input type="text" name="search-task" id="search-task" 
                    className='rounded-md border focus:outline-none pl-10 py-1' placeholder='Search Task'/>
                    <Grid3X3 className='absolute left-3 top-2 w-4 h-4 text-gray-400'/>
                </div>
            </div>

            <div className='flex items-center gap-7'>
                <TabButton name='Board' icon={<Grid3X3 className='w-6 h-6'/>}
                activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabButton name='List' icon={<List className='w-6 h-6'/>}
                activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabButton name='TimeLine' icon={<Clock className='w-6 h-6'/>}
                activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabButton name='Table' icon={<Table className='w-6 h-6'/>}
                activeTab={activeTab} setActiveTab={setActiveTab}/>
            </div>

        </div>
    </div>
  )
}

interface PropsTab{
    name:string;
    icon:React.ReactNode;
    setActiveTab: (tab:string) => void;
    activeTab:string;
}

const TabButton = ({
    name,icon,setActiveTab, activeTab
}:PropsTab) =>{
    const active = name === activeTab;
    return (
        <button className={`relative flex items-center gap-2
            dark:text-white hover:text-blue-600 after:absolute after:-bottom-[14px] after:left-0
            after:h-[1px] after:w-full hover:after:bg-blue-500 dark:hover:text-blue-600 ${active? "text-blue-600 dark:text-blue-600 after:bg-blue-500" : ""}`}
            onClick={() => setActiveTab(name)}>
            {icon}
            {name}
        </button>
    )
}

export default ProjectHeader;
