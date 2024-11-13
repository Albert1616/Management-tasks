'use client'

import Board from '@/components/BoardView'
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
      ) :null}
    </div>
  )
}

export default page