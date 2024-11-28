'use client'

import { useSearchQuery } from '@/state/api'
import React, { useEffect, useState } from 'react'
import { SearchResults } from '@/state/api'
import {debounce} from 'lodash';
import TaskCard from '../projects/ListView/TaskCard';
import ProjectCard from '@/components/project/ProjectCard';
import UserCard from '@/components/UserCard';
import LoadingComponent from '@/components/LoadingComponent';
import ErrorComponent from '@/components/ErrorComponent';

const Search = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const {
    data:SearchResults, isLoading, isError
  } = useSearchQuery(searchTerm,{
    skip: searchTerm.length < 3
  })

  const handleTerm = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) =>{
        setSearchTerm(event.target.value);
        console.log(searchTerm)
    },
    500,
  );

  useEffect(() => {
    return handleTerm.cancel
  }, [handleTerm.cancel])

  return (
    <div className='p-4'>
        <h1 className='font-bold text-2xl mb-3 dark:text-white'>
            Search
        </h1>

        <div>
            <input type="text" 
            placeholder='Search...'
            className='w-1/2 md:w-1/3 shadow rounded p-2 border text-lg focus:outline-none'
            onChange={handleTerm}/>
        </div>

        <div className='mt-8'>
            {isLoading&&(<LoadingComponent />)}
            {isError&&(<ErrorComponent message='Error to execute search'/>)}
            {!isLoading && !isError && SearchResults&&(
                <div>
                    {SearchResults?.tasks && SearchResults.tasks.length > 0 &&(
                        <h2 className='text-lg font-bold'>Tasks</h2>
                    )}
                    <div className='mt-4 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4'>
                        {SearchResults.tasks?.map((task) =>(
                            <TaskCard key={task.id}  task={task}/>
                        ))}
                    </div>

                    {SearchResults?.projects && SearchResults.projects.length > 0 &&(
                        <h2 className='text-lg font-bold mt-4'>Projects</h2>
                    )}

                    <div className='mt-4 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4'>
                        {SearchResults.projects?.map((project) =>(
                            <ProjectCard key={project.id}  project={project}/>
                        ))}
                    </div>

                    {SearchResults?.users && SearchResults.users.length > 0 &&(
                        <h2>Users</h2>
                    )}
                    {SearchResults.users?.map((user) =>(
                        <UserCard key={user.userId}  user={user}/>
                    ))}
                </div>
            )}
        </div>
    </div>
  )
}

export default Search