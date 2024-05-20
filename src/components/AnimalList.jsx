import React from 'react'
import { Link } from 'react-router-dom'

const AnimalList = () => {
    return (
        <div className='grid grid-cols-3 gap-3 m-3'>
            <Link
            to={'/Chicken'}
            className='shadow-2xl p-5 flex flex-col justify-center items-center'>
                <img 
                src="/chicken.webp" 
                alt="" />
            </Link>

            
            <Link to={'/Cow'}
            className='shadow-2xl p-5 flex flex-col justify-center items-center'>
                <img 
                src="/Cow.jpg" 
                alt="" 
                />
            </Link>

            <Link to={'/Kambing'} 
            className='shadow-2xl p-5 flex flex-col justify-center items-center'>
                <img 
                src="/kambing.jpg" 
                alt="" />
            </Link>
        </div>
    )
}

export default AnimalList