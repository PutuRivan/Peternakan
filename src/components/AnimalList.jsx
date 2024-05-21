import React from 'react'
import { Link } from 'react-router-dom'

const AnimalList = () => {
    return (
        <div className='grid grid-cols-3 gap-3 bg-[url("/bg.jpg")] h-[90vh] bg-no-repeat bg-cover'>
            {/* <Link
            to={'/Chicken'}
            className='p-5 flex flex-col justify-center items-center'>
                <img 
                src="/chicken.webp" 
                alt="" />
            </Link>

            
            <Link to={'/Cow'}
            className='p-5 flex flex-col justify-center items-center'>
                <img 
                src="/Cow.jpg" 
                alt="" 
                />
            </Link>

            <Link to={'/Kambing'} 
            className='p-5 flex flex-col justify-center items-center'>
                <img 
                src="/kambing.jpg" 
                alt="" />
            </Link> */}
        </div>
    )
}

export default AnimalList