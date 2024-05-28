import React, { useState } from "react";
import { Navigation } from "../components/Navigation";

const Kebutuhan = () => {
  const [rows, setRows] = useState([
    {
      Id_kebutuhan: "1",
      Jenis_Kebutuhan: "Pakan",
      Nama: "Rumput Gajah",
      Kuantitas: "100",
    },
    {
      Id_kebutuhan: "2",
      Jenis_Kebutuhan: "Pakan",
      Nama: "Konsentrat Sapi",
      Kuantitas: "50",
    },
    // Add more rows as needed
  ]);
  const [activeComponent, setActiveComponent] = useState(null);

  const handleInsert = () => {
    setActiveComponent("inputForm");
  };

  const handleUpdate = (index) => {
    setActiveComponent("updateForm");
    // Handle update logic for the row at the given index
  };

  const handleSort = (sortBy) => {
    setActiveComponent(null);
    // Handle sorting logic based on the selected column
  };

  return (
    <>
      <Navigation />
      <div className='bg-[url("/bg.jpg")] h-[90vh] bg-no-repeat bg-top bg-cover flex justify-center items-center'>
        <div className="p-4 max-w-3xl mx-auto">
          <div className="flex justify-between mb-4">
            <div>
              <button
                onClick={handleInsert}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Insert
              </button>
            </div>
            <select
              onChange={(e) => handleSort(e.target.value)}
              className="border rounded py-2 px-4"
            >
              <option value="">Sort By</option>
              <option value="Jenis Kebutuhan">Jenis Kebutuhan</option>
              <option value="Kuantitas">Kuantitas</option>
            </select>
          </div>

          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Id Kebutuhan</th>
                <th className="px-4 py-2">Jenis kebutuhan</th>
                <th className="px-4 py-2">Nama</th>
                <th className="px-4 py-2">Kuantitas</th>
                <th className="px-4 py-2">Action</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="odd:bg-gray-100">
                  <td className="border px-4 py-2">{row.Id_kebutuhan}</td>
                  <td className="border px-4 py-2">{row.Jenis_Kebutuhan}</td>
                  <td className="border px-4 py-2">{row.Nama}</td>
                  <td className="border px-4 py-2">{row.Kuantitas}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleUpdate(index)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleUpdate(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {activeComponent === "inputForm" && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white p-4 rounded w-[400px] flex flex-col gap-5">
                <div className=" w-full flex flex-row justify-between">
                  <div className="">
                    <h2 className="font-bold text-2xl">MASUKAN DATA KEBUTUHAN</h2>
                  </div>
                  <div className="">
                    <button 
                    className="font-bold text-2xl text-[red]"
                    >X</button>
                  </div>
                </div>

                <div>
                  <form className="flex flex-col gap-5">
                    <input type="text" placeholder="Id Kebutuhan" className="border-black border-2 rounded-xl p-2"/>
                    <input type="text" placeholder="jenis Kebutuhan"  className="border-black border-2 rounded-xl p-2"/>
                    <input type="text" placeholder="Nama" className="border-black border-2 rounded-xl p-2"/>
                    <input type="text" placeholder="Kuantitas" className="border-black border-2 rounded-xl p-2"/>
                    <button>Submit</button>
                  </form>
                </div>
              </div>
            </div>
          )}
          {activeComponent === "updateForm" && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white p-4 rounded">
                <h2 className="text-xl font-bold mb-2">Update Form</h2>
                {/* Add update form fields and logic */}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const InputForm = () => {
  // Implement the input form component
  return (
    <div>
      <h2>Input Form</h2>
      {/* Add input fields and form logic */}
    </div>
  );
};

const UpdateForm = () => {
  // Implement the update form component
  return (
    <div>
      <h2>Update Form</h2>
      {/* Add update form fields and logic */}
    </div>
  );
};

const FarmScene = () => {
  // Implement the farm scene component
  return (
    <div>
      <h2>Farm Scene</h2>
      {/* Add farm scene visuals and functionality */}
    </div>
  );
};

export default Kebutuhan;
