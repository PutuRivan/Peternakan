import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav className='flex justify-between items-center bg-[green] px-3 py-2 h-[10vh]'>
      <Link
      to={'/Dashboard'} 
      className='text-[1.4rem]'>
        <img 
        src="/bg.jpg" 
        alt="" 
        className='rounded-full w-[3.2rem] h-[3.2rem]'
        />
      </Link>
      <div className='flex gap-3 text-[1.2rem]'>
        <a href="/Hewan" className='hover:text-[red]'>Hewan</a>
        <a href="/Data" className='hover:text-[red]'>Data</a>
        <a href="/Kebutuhan" className='hover:text-[red]'>Kebutuhan</a>
      </div>
      <div>
       
      </div>
    </nav>
  )
}
