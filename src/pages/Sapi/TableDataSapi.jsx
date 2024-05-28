import React, { useState } from "react";

const TableDataSapi = () => {
  const [rows, setRows] = useState([
    {
      idbabi: "1",
      jenis_babi: "Berkshire",
      jenis_kelamin: "Jantan",
      umur: "3",
      berat: "150.75",
      kondisi: "Sakit",
    },
    {
      idbabi: "2",
      jenis_babi: "Yorkshire",
      jenis_kelamin: "Betina",
      umur: "2",
      berat: "130.5",
      kondisi: "Sehat",
    },
    {
      idbabi: "3",
      jenis_babi: "Duroc",
      jenis_kelamin: "Jantan",
      umur: "4",
      berat: "160.20",
      kondisi: "Sakit",
    },
  ]);

  const handleDeleteRow = (id) => {
    setRows(rows.filter((row) => row.idbabi !== id));
  };

  const handleInsertRow = () => {
    const newId = rows.length + 1;
    const newRow = {
      idbabi: newId,
      jenis_babi: "Berkshire",
      jenis_kelamin: "Jantan",
      umur: "3",
      berat: "150.75",
      kondisi: "Sakit",
    };
    setRows([...rows, newRow]);
  };
  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-6 ">
      <h1 className="text-center text-2xl py-3">Data Kambing</h1>
      <div className="overflow-y-auto h-[50vh]">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Id Babi</th>
              <th className="px-4 py-2">Jenis Kambing</th>
              <th className="px-4 py-2">Jenis Kelamin</th>
              <th className="px-4 py-2">Umur</th>
              <th className="px-4 py-2">Kondisi</th>
              <th className="px-4 py-2">Berat</th>
              <th className="px-4 py-2">action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="border px-4 py-2">{row.idbabi}</td>
                <td className="border px-4 py-2">{row.jenis_babi}</td>
                <td className="border px-4 py-2">{row.jenis_kelamin}</td>
                <td className="border px-4 py-2">{row.umur}</td>
                <td className="border px-4 py-2">{row.kondisi}</td>
                <td className="border px-4 py-2">{row.berat}</td>
                <td className="border px-4 py-2 flex flex-col gap-2 ">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDeleteRow(row.idbabi)}
                  >
                    Hapus
                  </button>
                  <button
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDeleteRow(row.idbabi)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleInsertRow}
      >
        Insert
      </button>
    </div>
  );
};

export default TableDataSapi;
