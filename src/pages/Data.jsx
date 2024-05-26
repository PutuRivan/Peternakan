import React from 'react'
import { Navigation } from '../components/Navigation'
import DataTable from '../components/DataTable'

const Data = () => {
    return (
        <>
        <Navigation/>
        <div className='bg-[url("/bg.jpg")] h-[90vh] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center'>
            <DataTable/>
        </div>
        </>
    )
}

export default Data