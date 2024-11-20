'use client'

import Board from '@/components/BoardView'
import List from '@/components/ListView'
import ProjectHeader from '@/components/project/ProjectHeader'
import TableView from '@/components/TableView'
import TimeLine from '@/components/TimeLineView'
import React, { useState } from 'react'

type Props = {
    params: {
        id: string
    }
}

const page = ({params}: Props) => {
  const [activeTab, setActiveTab] = useState("Board");
  const [isOpenModalTask, setIsOpenModalTask] = useState(false);

  return (
    <div className='pt-3 px-2'>
      <ProjectHeader title="Product Desing Development" activeTab={activeTab}
      setActiveTab={setActiveTab} />
      {activeTab === "Board" ? (
        <Board id={params.id} key={params.id} setIsOpenModalTask={setIsOpenModalTask}/>
      ) : activeTab === "List" ? (
        <List id={params.id}/>
      ) : activeTab === "TimeLine" ? (
        <TimeLine id={params.id} setIsOpenModalTask={setIsOpenModalTask}/> 
      ) : activeTab === "Table" ? (
        <TableView id={params.id} setIsOpenModalTask={setIsOpenModalTask}/>
      ) : null}
    </div>
  )
}

export default page