'use client'

import { Grid3X3 } from 'lucide-react';
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
        <div className='flex items-center mt-5 gap-2 border-y border-gray-200 w-full'>
            <TabButton name='Board' icon={<Grid3X3/>}
            activeTab={activeTab} setActiveTab={setActiveTab}/>
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
        <button className={`flex items-center py-3 px-1 gap-2
            dark:text-white hover:text-blue-600 after:border-blue-300 ${active? "text-blue-600" : ""}`}
            onClick={() => setActiveTab(name)}>
            {icon}
            {name}
        </button>
    )
}

export default ProjectHeader;
