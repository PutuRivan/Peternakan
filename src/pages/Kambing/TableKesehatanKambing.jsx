import React, { useState } from "react";

const TableKesehatanKambing = () => {
  const [rows, setRows] = useState([
    {
      Idkesehatan: "1",
      idbabi: "1",
      tanggal_sakit: "2024-06-10",
      penyakit: "Kolera Babi",
      penanganan: "Isolasi hewan yang sakit, pemberian antibiotik",
    },
    {
      Idkesehatan: "1",
      idbabi: "1",
      tanggal_sakit: "2024-06-10",
      penyakit: "Kolera Babi",
      penanganan: "Isolasi hewan yang sakit, pemberian antibiotik",
    },
    {
      Idkesehatan: "1",
      idbabi: "1",
      tanggal_sakit: "2024-06-10",
      penyakit: "Kolera Babi",
      penanganan: "Isolasi hewan yang sakit, pemberian antibiotik",
    },
  ]);

  const handleDeleteRow = (id) => {
    setRows(rows.filter((row) => row.Idkesehatan !== id));
  };

  const handleInsertRow = () => {
    const newId = rows.length + 1;
    const newRow = {
      Idkesehatan: newId,
      idbabi: "1",
      tanggal_sakit: "2024-06-10",
      penyakit: "Kolera Babi",
      penanganan: "Isolasi hewan yang sakit, pemberian antibiotik",
    };
    setRows([...rows, newRow]);
  };
  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-center text-2xl py-3">KESEHATAN BABI</h1>
      <div className="overflow-y-auto h-[50vh] relative">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Id Kesehatan</th>
              <th className="px-4 py-2">Id Babi</th>
              <th className="px-4 py-2">Tanggal Sakit</th>
              <th className="px-4 py-2">Penyakit</th>
              <th className="px-4 py-2">Penanganan</th>
              <th className="px-4 py-2">action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.Idkesehatan}>
                <td className="border px-4 py-2">{row.Idkesehatan}</td>
                <td className="border px-4 py-2">{row.idbabi}</td>
                <td className="border px-4 py-2">{row.tanggal_sakit}</td>
                <td className="border px-4 py-2">{row.penyakit}</td>
                <td className="border px-4 py-2">{row.penanganan}</td>
                <td className="border px-4 py-2 flex flex-col gap-2 ">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDeleteRow(row.Idkesehatan)}
                  >
                    Hapus
                  </button>
                  <button
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDeleteRow(row.id)}
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

export default TableKesehatanKambing;
