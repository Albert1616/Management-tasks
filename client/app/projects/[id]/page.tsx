'use client'

import Board from '@/app/projects/BoardView'
import List from '@/app/projects/ListView'
import ProjectHeader from '@/components/project/ProjectHeader'
import TableView from '@/app/projects/TableView'
import TimeLine from '@/app/projects/TimeLineView'
import React, { useState } from 'react'
import ModalNewTask from '@/components/ModalNewTask'

type Props = {
    params: {
        id: string
    }
}

const page = ({params}: Props) => {
  const [activeTab, setActiveTab] = useState("Board");
  const [isOpenModalNewTask, setIsOpenModalNewTask] = useState(false);

  return (
    <div className='pt-3 px-2'>
      <ModalNewTask id={params.id} isOpen={isOpenModalNewTask} isClose={() => setIsOpenModalNewTask(false)}/>
      <ProjectHeader title="Product Desing Development" activeTab={activeTab}
      setActiveTab={setActiveTab} />
      {activeTab === "Board" ? (
        <Board id={params.id} key={params.id} setIsOpenModalNewTask={setIsOpenModalNewTask}/>
      ) : activeTab === "List" ? (
        <List id={params.id} key={params.id} setIsOpenModalNewTask={setIsOpenModalNewTask}/>
      ) : activeTab === "TimeLine" ? (
        <TimeLine id={params.id} setIsOpenModalTask={setIsOpenModalNewTask}/> 
      ) : activeTab === "Table" ? (
        <TableView id={params.id} setIsOpenModalTask={setIsOpenModalNewTask}/>
      ) : null}
    </div>
  )
}

export default page