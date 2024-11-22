import { useCreateProjectMutation } from '@/state/api';
import React, { useState } from 'react'
import {formatISO} from 'date-fns'
import Modal from '@/components/Modal';

type Props = {
    isOpen: boolean;
    isClose: () => void;
}

const ModalNewProject = ({isOpen, isClose}: Props) => {

  const [createProject, {isLoading}] = useCreateProjectMutation();
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async() =>{
    if(!projectName || !description || !startDate || !endDate) return;

    const startDateFormatted = formatISO(new Date(startDate), {representation:'complete'});
    const endDateFormatted = formatISO(new Date(endDate), {representation:'complete'});

    await createProject({
        name: projectName,
        description,
        startDate: startDateFormatted,
        endDate: endDateFormatted,
    })

    isClose();
  }

  const isValidForm = () =>{
    return projectName && description && startDate && endDate;
  }

  const inputStyles = "w-full p-1 rounded border border-gray-400 shadow-sm dark:border-dark-secondary"

  return (
    <Modal isOpen={isOpen} isClose={isClose} title='Create New Project'>
        <form onSubmit={(e) =>{
            e.preventDefault();
            handleSubmit();
        }}
        className='mt-4 space-y-4'
        >
            <input type="text" className={inputStyles} placeholder='Project name'
            value={projectName} onChange={(e) => setProjectName(e.target.value)}/>

            <textarea className={inputStyles} placeholder='Description'
            value={description} onChange={(e) => setDescription(e.target.value)}/>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2'>
                <div>
                    <label htmlFor="startdate">Start Date</label>
                    <input id='startdate' type="date" className={inputStyles} placeholder='Start date'
                    value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="enddate">End Date</label>
                    <input id='enddate' type="date" className={inputStyles}
                    value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                </div>
            </div>
            <button
            className={`mt-4 flex w-full py-1 font-semibold text-lg rounded border border-transparent bg-blue-600 text-white items-center justify-center
                cursor-pointer hover:bg-blue-800 ${!isValidForm() || isLoading ? "cursor-not-allowed opacity-50" : ""}`}
            disabled={!isValidForm() || isLoading}>
                {isLoading ? "...Creating" : "Create Project"}
            </button>
        </form>
    </Modal>
  )
}

export default ModalNewProject