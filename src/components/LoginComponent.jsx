import React from 'react'

const LoginComponent = () => {
    return (
    <div className="bg-[url('/login-bg.jpg')] bg-cover bg-center h-screen">
        <div className='flex justify-center items-center h-screen'>
        <div className='w-[400px] h-[500px] rounded-2xl bg-[#dbdbdbfd]'>
            <div className='flex justify-center flex-col items-center'>
            <form action="" className='flex flex-col gap-6'>
                <h2 className='text-black m-[50px] text-center text-[2.5rem]'>
                WELCOME
                </h2> 
                <input type="text" placeholder='username' className='py-1 px-3 rounded-xl' />
                <input type="password" placeholder='password' className='py-1 px-3 rounded-xl'/>
                <button className='hover:bg-white focus:ring rounded-xl py-1 bg-[#27ff1c]'>
                    Login
                </button>
            </form>
            </div>
        </div>
        </div>
    </div>
)
}

export default LoginComponent;
