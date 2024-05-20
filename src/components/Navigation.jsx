import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav className='flex justify-between items-center bg-[green] px-3 py-2 h-[10vh]'>
      <Link
      to={'/Dashboard'} 
      className='text-[1.4rem]'>
        <img 
        src="/Logo.jpg" 
        alt="" 
        className='rounded-full w-[3.2rem] h-[3.2rem]'
        />
      </Link>
      <div className='flex gap-3 text-[1.2rem]'>
        <a href="/Hewan" className='hover:text-[red]'>Hewan</a>
        <a href="/info" className='hover:text-[red]'>Info</a>
        <a href="/Status" className='hover:text-[red]'>Status</a>
      </div>
      <div>
        <img 
        src="/people.png" 
        alt="profile" 
        className='rounded-full w-12 h-12'
        />
      </div>
    </nav>
  )
}
