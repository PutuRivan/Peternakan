import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const LoginComponent = () => {
    const Navigate = useNavigate()

    const goToDashboard = () =>{
        Navigate("/Dashboard")
    }
    return (
    <div className="bg-[url('/login-bg.jpg')] bg-cover bg-center h-screen">
        <div className='flex justify-center items-center h-screen'>
            <div className='w-[400px] h-[500px] rounded-2xl bg-[#dbdbdbfd]'>
                <div className='flex justify-center flex-col items-center'>
                    <form action="" className='flex flex-col gap-6'>
                        <h2 className='text-black m-[50px] text-center text-[2.5rem]'>
                        WELCOME
                        </h2> 
                        <input type="text" placeholder='username' className='py-1 px-3 rounded-xl border-2 border-gray-800' />
                        <input type="password" placeholder='password' className='py-1 px-3 rounded-xl border-2 border-gray-800'/>
                        <div className='flex flex-row gap-[3rem] text-[15px]'>
                            <label htmlFor="" className=''>
                            <input type="checkbox" name="" id="" /> Remember me
                            </label>
                            <a href="" className='text-[red]'>Forgot Password?</a>
                        </div>
                            <button className='hover:bg-white rounded-xl py-1 bg-[#27ff1c] hover:border-2 hover:border-[#25ff1c] my-5'
                            onClick={() => goToDashboard()}>
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
