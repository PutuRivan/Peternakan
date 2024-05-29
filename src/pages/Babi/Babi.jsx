import React, { useState } from "react";
import { Navigation } from "../../components/Navigation";
import { Link } from "react-router-dom";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import TableDataBabi from "./TableDataBabi";
import TableKesehatanBabi from "./TableKesehatanBabi";

const Babi = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Navigation />
      <div className='bg-[url("/bg.jpg")] h-[90vh] bg-no-repeat bg-center bg-cover'>
        <div className="flex w-full gap-5 h-[90vh]">
          <div className="w-[350px] flex py-14">
            <Link to="/Hewan">
              <ArrowCircleLeft size={80} className="text-[red]" />
            </Link>
            <img
              src="/babi.jpg"
              alt=""
              className="rounded-xl w-[200px] h-[200px] mx-3"
            />
          </div>
          <div className="w-[1300px] flex flex-col gap-3 py-10 px-5">
            <div className="">
              <select
                onChange={(e) => handleOptionChange(e.target.value)}
                className="px-4 py-2 bg-gray-200 rounded-md"
                value={selectedOption} 
              >
                <option value="">Pilih</option>
                <option value="TableBabi">Data Table Babi</option>
                <option value="Kesehatan">Data Table Kesehatan Babi</option>
              </select>
            </div>

            <div className="flex w-full">
              {selectedOption === "TableBabi" && <TableDataBabi />}
              {selectedOption === "Kesehatan" && <TableKesehatanBabi />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Babi;