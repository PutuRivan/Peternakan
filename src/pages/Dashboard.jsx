import React from 'react'
import { Navigation } from '../components/Navigation'

const DashboardPage = () => {
    return (
    <>
        <Navigation/>
        {/* <div className='bg-[url("/bg.jpg")] h-[90vh] bg-no-repeat bg-top bg-cover'>
            
        </div> */}
        <img 
        className='h-[90vh] w-full'
        src="/bg.jpg" 
        alt="" />
    </>
    )
}

export default DashboardPage;
