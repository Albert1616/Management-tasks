import { useGetTasksQuery, useUpdatedTaskStatusMutation } from '@/state/api';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import React from 'react'

type Props = { //PROPS TASK
    id: string,
    isOpenModalTask: boolean
}

const statusTask = [
    "To Do", "Work in Progress", "Under Review", "Completed" //TASK STATUS
];

const BoardView = ({id, isOpenModalTask}: Props) => {
  const {
    data: tasks, isLoading, error
  } = useGetTasksQuery({projectId: Number(id)}); //GET TASK FOR THE ESPECIFY ID

  const [updateStatus] = useUpdatedTaskStatusMutation(); //ATRIBUTE UPDATESTATUS FOR MUTATION 

  const moveTask = (id:number, toStatus:string) =>{ //MOVE TASK FUNCTION TO DND
    updateStatus({taskId: id, status: toStatus});
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error to fetching tasks</div>

  return (
    <DndProvider backend={HTML5Backend}>
        BoardView
    </DndProvider>
  )
}

export default BoardView