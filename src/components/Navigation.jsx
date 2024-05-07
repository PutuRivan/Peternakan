import React from 'react'

export const Navigation = () => {
  return (
    <>
    <nav className='h-screen bg-[#21661b] w-[17rem] py-[5rem] flex flex-col border-r-2 border-black'>
        <div className='flex flex-col items-center border-b-2 pb-[3rem] '>
            <img src="/login-bg.jpg" alt="" className='h-[5rem] w-[5rem] rounded-full'/>
        </div>
        
        <div className='flex flex-col px-6 py-2 gap-6'>
            <h2 className='text-center text-[15px] text-[gray]'>Navigation</h2>
            <a href="/Dashboard" className='hover:border-b-2 hover:border-[#63ff63]'>Dashboard</a>
            <a href="/" className='hover:border-b-2 hover:border-[#63ff63]'>Nav2</a>
            <a href="/" className='hover:border-b-2 hover:border-[#63ff63]'>Nav3</a>
            <a href="/" className='hover:border-b-2 hover:border-[#63ff63]'>Nav4</a>
        </div>
    </nav>
    </>
  )
}
