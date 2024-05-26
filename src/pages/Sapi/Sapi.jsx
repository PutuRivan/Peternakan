import React from "react";
import { Navigation } from "../../components/Navigation";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Sapi = () => {
  return (
    <>
      <Navigation />
      <div className='bg-[url("/bg.jpg")] h-[90vh] bg-no-repeat bg-center bg-cover flex'>
        <div className="flex flex-col my-9 w-full gap-5 mx-9">
          <div className="flex flex-row">
            <Link to="/Hewan">
              <ArrowCircleLeft size={80} className="text-[red]" />
            </Link>
            <img
              src="/Cow.jpg"
              alt=""
              className="rounded-xl w-[200px] h-[200px] mx-3"
            />
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-52">
              <Link 
              to="/Add-Data-Sapi"
              className="bg-white w-[300px] h-[300px] rounded-xl flex flex-col items-center justify-center">
                <img className="h-[250px] w-[250px]" src="/plus.png" alt="" />
                <h1 className="font-bold text-[2rem]">TAMBAH DATA</h1>
              </Link>

              <Link 
              to="/Update-Data-Sapi"
              className="bg-white w-[300px] h-[300px] rounded-xl flex flex-col items-center justify-center">
                <img className="h-[250px] w-[250px]" src="/update.png" alt="" />
                <h1 className="font-bold text-[2rem]">UBAH DATA</h1>
              </Link>

              <div className="bg-white w-[300px] h-[300px] rounded-xl flex flex-col items-center justify-center">
                <img
                  className="h-[250px] w-[250px]"
                  src="/kesehatan.png"
                  alt=""
                />
                <h1 className="font-bold text-[2rem]">KESEHATAN</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sapi;
