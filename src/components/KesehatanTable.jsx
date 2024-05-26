import { ArrowCircleLeft } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const KesehatanTable = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      kritikal: "Data 1",
      kondisi: "Data 1",
      penyakit: "Data 1",
      penanganan: "Data 1",
    },
    {
      id: 2,
      kritikal: "Data 2",
      kondisi: "Data 2",
      penyakit: "Data 2",
      penanganan: "Data 2",
    },
    {
      id: 3,
      kritikal: "Data 3",
      kondisi: "Data 3",
      penyakit: "Data 3",
      penanganan: "Data 3",
    },
  ]);

  const handleDeleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleInsertRow = () => {
    const newId = rows.length + 1;
    const newRow = {
      id: newId,
      kritikal: "Data Baru",
      kondisi: "Data Baru",
      penyakit: "Data Baru",
      penanganan: "Data Baru",
    };
    setRows([...rows, newRow]);
  };

  return (
    <div className="flex flex-row items-center justify-center h-[90vh]">
      <div className="">
        <Link to="/Babi">
          <ArrowCircleLeft size={80} className="text-[red]" />
        </Link>
      </div>
      <div className="w-3/4 md:w-2/3 lg:w-1/2 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-center text-2xl py-3">KESEHATAN BABI</h1>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Kritikal</th>
              <th className="px-4 py-2">Kondisi</th>
              <th className="px-4 py-2">Penyakit</th>
              <th className="px-4 py-2">Penanganan</th>
              <th className="px-4 py-2">Hapus</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="border px-4 py-2">{row.kritikal}</td>
                <td className="border px-4 py-2">{row.kondisi}</td>
                <td className="border px-4 py-2">{row.penyakit}</td>
                <td className="border px-4 py-2">{row.penanganan}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDeleteRow(row.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleInsertRow}
        >
          Insert
        </button>
      </div>
    </div>
  );
};

export default KesehatanTable;
