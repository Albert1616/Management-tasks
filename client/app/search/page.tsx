'use client'

import { useSearchQuery } from '@/state/api'
import React, { useState } from 'react'
import { SearchResults } from '@/state/api'
import {debounce} from 'lodash';
import TaskCard from '../projects/ListView/TaskCard';

const Search = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const {
    data:SearchResults, isLoading, isError
  } = useSearchQuery({query: searchTerm})

  const handleTerm = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) =>{
        setSearchTerm(event.target.value);
    },
    500,
  );

  return (
    <div className='p-8'>
        <h1 className='font-bold text-2xl mb-3 dark:text-white'>
            Search
        </h1>
        <div>
            <input type="text" 
            placeholder='Search...'
            className='w-1/2 shadow rounded p-3 border'
            onChange={handleTerm}/>
        </div>

        <div className='mt-8'>
            {isLoading&&(<div>Loading...</div>)}
            {isError&&(<div>Error to execute search</div>)}
            {!isLoading && !isError && SearchResults&&(
                <div>
                    {SearchResults?.tasks && SearchResults.tasks.length > 0 &&(
                        <h2>Tasks</h2>
                    )}
                    {SearchResults.tasks?.map((task) =>(
                        <TaskCard key={task.id}  task={task}/>
                    ))}

                    {SearchResults?.projects && SearchResults.projects.length > 0 &&(
                        <h2>Projects</h2>
                    )}
                    {SearchResults.projects?.map((project) =>(
                        <ProjectCard key={project.id}  task={project}/>
                    ))}

                    {SearchResults?.users && SearchResults.users.length > 0 &&(
                        <h2>Users</h2>
                    )}
                    {SearchResults.users?.map((user) =>(
                        <UserCard key={user.id}  task={user}/>
                    ))}
                </div>
            )}
        </div>
    </div>
  )
}

export default Search