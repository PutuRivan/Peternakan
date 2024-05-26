import React from 'react'
import { Navigation } from '../../components/Navigation'
import { Link } from 'react-router-dom'
import { ArrowCircleLeft } from '@phosphor-icons/react'

const UpdateDataSapi = () => {
  return (
    <>
    <Navigation/>
    <div className='bg-[url("/bg.jpg")] h-[90vh] bg-no-repeat bg-center bg-cover flex items-center justify-center '>
        <div className="flex gap-5">
          <div className="">
            <Link to="/Babi">
              <ArrowCircleLeft size={80} className="text-[red]" />
            </Link>
          </div>
          <div className="flex flex-col justify-center bg-yellow-400 w-[400px] h-[400px] items-center rounded-xl gap-5">
            <h1 className="font-bold text-[2rem]">UPDATE DATA SAPI</h1>
            <form method="post" className="flex flex-col gap-4">
              <input type="text" placeholder="Id" className="p-2 rounded-xl" />
              <input
                type="text"
                placeholder="jenis hewan"
                className="p-2 rounded-xl"
              />
              <input
                type="text"
                placeholder="jenis kelamin"
                className="p-2 rounded-xl"
              />
              <input
                type="text"
                placeholder="berat hewan"
                className="p-2 rounded-xl"
              />
              <button type="submit" className=" ">
                UPDATE
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateDataSapi