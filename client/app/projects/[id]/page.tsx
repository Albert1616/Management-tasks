'use client'

import Board from '@/components/BoardView'
import List from '@/components/ListView'
import ProjectHeader from '@/components/project/ProjectHeader'
import React, { useState } from 'react'

type Props = {
    params: {
        id: string
    }
}

const page = ({params}: Props) => {
  const [activeTab, setActiveTab] = useState("Board");

  return (
    <div className='pt-3 px-2'>
      <ProjectHeader title="Product Desing Development" activeTab={activeTab}
      setActiveTab={setActiveTab} />
      {activeTab === "Board" ? (
        <Board id={params.id} key={params.id} setIsOpenModalTask={(isOpen:boolean) => isOpen}/>
      ) : activeTab === "List" ? (
        <List id={params.id}/>
      ) : null}
    </div>
  )
}

export default page