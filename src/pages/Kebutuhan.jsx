import React, { useState } from "react";
import { Navigation } from "../components/Navigation";

const Kebutuhan = () => {
  const [rows, setRows] = useState([
    { title: "", col1: 123, col2: 456, col3: "" },
    { title: "", col1: 123, col2: 456, col3: "" },
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

  const handleCheckRequirements = () => {
    setActiveComponent("farmScene");
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
          <button
            onClick={handleCheckRequirements}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Cek Kebutuhan
          </button>
        </div>
        <select
          onChange={(e) => handleSort(e.target.value)}
          className="border rounded py-2 px-4"
        >
          <option value="">Sort By</option>
          <option value="title">Title</option>
          <option value="col1">Col 1</option>
          <option value="col2">Col 2</option>
          <option value="col3">Col 3</option>
        </select>
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Col 1</th>
            <th className="px-4 py-2">Col 2</th>
            <th className="px-4 py-2">Col 3</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="odd:bg-gray-100">
              <td className="border px-4 py-2">{row.title}</td>
              <td className="border px-4 py-2">{row.col1}</td>
              <td className="border px-4 py-2">{row.col2}</td>
              <td className="border px-4 py-2">{row.col3}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleUpdate(index)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {activeComponent === 'inputForm' && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Input Form</h2>
            {/* Add input fields and form logic */}
          </div>
        </div>
      )}
      {activeComponent === 'updateForm' && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Update Form</h2>
            {/* Add update form fields and logic */}
          </div>
        </div>
      )}
      {activeComponent === 'farmScene' && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Farm Scene</h2>
            {/* Add farm scene visuals and functionality */}
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
