import React from 'react'
import { Link } from 'react-router-dom'

const AnimalList = () => {
    return (
        <div className='bg-[url("/bg.jpg")] h-[90vh] bg-no-repeat bg-center bg-cover flex justify-center items-center'>
            <div className='grid grid-cols-3 gap-5'>
                <Link 
                to="/Babi"
                className='bg-yellow-400 p-5 rounded-xl '
                >
                <img 
                src="/babi.jpg" 
                alt="" 
                className='rounded-xl w-[300px] h-[300px]'
                />
                </Link>

                <Link
                to="/Sapi"
                className='bg-yellow-400 p-5 rounded-xl '
                >
                <img 
                src="/Cow.jpg" 
                alt="" 
                className='rounded-xl w-[300px] h-[300px]'
                />
                </Link>

                <Link
                to="/Kambing"
                className='bg-yellow-400 p-5 rounded-xl '
                >
                <img 
                src="/kambing.jpg" 
                alt="" 
                className='rounded-xl w-[300px] h-[300px]'
                />
                </Link>
            </div>
        </div>
    )
}

export default AnimalList