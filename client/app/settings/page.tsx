'use client'

import React, { useState } from 'react'

type Props = {}

const Settings = (props: Props) => {

  const [username, setUsername] = useState("Jonhdoe");
  const [email, setEmail] = useState("jonh.doe@gmail.com");
  const [team, setTeam] = useState("Development Team");
  const [role, setRole] = useState("Developer");

  const labelStyles = "block text-sm font-medium dark:text-white";
  const textSyles = "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:text-white focus:outline-none"
  return (
    <div className='p-4'>
        <div className='space-y-4'>
            <div>
              <label className={labelStyles}>Username</label>
              <input type="text" className={textSyles} value={username}/>
            </div>

            <div>
              <label className={labelStyles}>Email</label>
              <input type="text" className={textSyles} value={email}/>
            </div>
            <div>
              <label className={labelStyles}>Team</label>
              <input type="text" className={textSyles} value={team}/>
            </div>
            <div>
              <label className={labelStyles}>Role</label>
              <input type="text" className={textSyles} value={role}/>
            </div>
        </div>
    </div>
  )
}

export default Settings