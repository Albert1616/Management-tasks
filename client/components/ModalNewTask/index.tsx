import { Priority, Status, useCreateTaskMutation } from '@/state/api';
import { formatISO } from 'date-fns';
import React, { useState } from 'react'
import Modal from '../Modal';

type Props = {
    isOpen:boolean,
    isClose: () => void,
    id?: string | null
}

const ModalNewTask = ({isOpen, isClose, id = null}: Props) => {

  const [createTask, {isLoading}] = useCreateTaskMutation();

  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<Status>(Status.ToDo);
  const [priority, setPriority] = useState<Priority>(Priority.Backlog);
  const [tags, setTags] = useState("");
  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [authorUserId, setAuthorUserId] = useState("");
  const [assignedUserId, setAssignedUserId] = useState("");
  const [projectId, setProjectId] = useState("");

  const handleSubmit = async () =>{
    if (!isValidForm()) return;

    const startDateFormatted = formatISO(new Date(startDate), {representation:'complete'});
    const dueDateFormatted = formatISO(new Date(dueDate), {representation:'complete'});

    await createTask({
        title: taskName,
        description,
        status,
        priority,
        tags,
        startDate: startDateFormatted,
        dueDate: dueDateFormatted,
        authorUserId: parseInt(authorUserId),
        assignedUserId: parseInt(assignedUserId),
        projectId: id === null ? Number(projectId) : Number(id)
         
    })
  }

  const isValidForm = () =>{
    return taskName && authorUserId && (id !== null || projectId);
 }

  const selectStyles = "mb-4 block w-full rounded border border-gray-399 px-3 py-1";

  const inputStyles = "w-full p-1 rounded border border-gray-400 shadow-sm dark:border-dark-secondary";

  return (
    <Modal isOpen={isOpen} isClose={isClose} title='Create New Task'>
        <form onSubmit={(e) =>{
            e.preventDefault();
            handleSubmit();
        }}
        className='mt-4 space-y-4'
        >
            <input type="text" className={inputStyles} placeholder='Project name'
            value={taskName} onChange={(e) => setTaskName(e.target.value)}/>

            <textarea className={inputStyles} placeholder='Description'
            value={description} onChange={(e) => setDescription(e.target.value)}/>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2'>
                <div>
                    <label htmlFor="status">Status</label>
                    <select id="status" className={selectStyles} onChange={(e) => setStatus(Status[e.target.value as keyof typeof Status])}
                        value={status}>
                        <option value={Status.ToDo}>To Do</option>
                        <option value={Status.WorkInProgress}>Work in Progress</option>
                        <option value={Status.UnderReview}>Under Review</option>
                        <option value={Status.Completed}>Completed</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="priority">Priority</label>
                    <select id="priority" className={selectStyles} onChange={(e) => setPriority(Priority[e.target.value as keyof typeof Priority])}
                        value={priority}>
                            <option value={Priority.Backlog}>Backlog</option>
                            <option value={Priority.Low}>Low</option>
                            <option value={Priority.Medium}>Medium</option>
                            <option value={Priority.High}>High</option>
                            <option value={Priority.Urgent} className='text-red-400'>Urgent</option>
                        </select>
                </div>
            </div>

            <input type="text" value={tags} placeholder='Tags (comma separated)'
            className={inputStyles} onChange={(e) => setTags(e.target.value)}/>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2'>
                <div>
                    <label htmlFor="startdate">Start Date</label>
                    <input id='startdate' type="date" className={inputStyles} placeholder='Start date'
                    value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="duedate">Due Date</label>
                    <input id='duedate' type="date" className={inputStyles}
                    value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>
                </div>
            </div>

            <input type="text" value={authorUserId} placeholder='Author User ID'
            className={inputStyles} onChange={(e) => setAuthorUserId(e.target.value)}/>

            <input type="text" 
            value={assignedUserId} 
            placeholder='Assinged User ID'
            className={inputStyles} 
            onChange={(e) => setAssignedUserId(e.target.value)} />

            {id === null && (
                <input type="text" 
                value={projectId} 
                placeholder='Project Id'
                className={inputStyles} 
                onChange={(e) => setProjectId(e.target.value)} />
            )}

            <button
            className={`mt-4 flex w-full py-1 font-semibold text-lg rounded border border-transparent bg-blue-600 text-white items-center justify-center
                cursor-pointer hover:bg-blue-800 ${!isValidForm() || isLoading ? "cursor-not-allowed opacity-50" : ""}`}
            disabled={!isValidForm() || isLoading}>
                {isLoading ? "...Creating" : "Create Task"}
            </button>
        </form>
    </Modal>
  )
}

export default ModalNewTask;