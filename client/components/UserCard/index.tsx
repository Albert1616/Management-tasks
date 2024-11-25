import { User } from '@/state/api'
import Image from 'next/image'
import React from 'react'

type Props = {
    user:User
}

const UserCard = ({user}: Props) => {
  return (
    <div className='flex items-center rounded shadow p-4'>
        {user.profilePictureUrl&&(
            <Image
            src={`/${user.profilePictureUrl}`}
            alt='User picture'
            width={32}
            height={32}
            className='rounded-full'/>
        )}
        <div>
            <h2>{user.username}</h2>
            <p>{user.email}</p>
        </div>
    </div>
  )
}

export default UserCard