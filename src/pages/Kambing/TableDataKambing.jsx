import React, { useEffect, useState } from "react";

const TableDataKambing = () => {
  const [hewan, setHewan] = useState([]);
  const [activeComponent, setActiveComponent] = useState(null);
  const [jenisKambing, setJenisKambing] = useState("");
  const [jenisKelamin, setJeniskelamin] = useState("");
  const [umur, setUmur] = useState("");
  const [berat, setBerat] = useState("");
  const [kondisi, setKondisi] = useState("");
  const [updateKondisi, setUpdateKondisi] = useState("");
  const [selectedIdKambing, setSelectedIdKambing] = useState("");
  const [selectDelete, setSelectDelete] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8000/API/v1/Moomeadows/Kambing"
      );
      const data = await response.json();
      setHewan(data);
    };

    fetchData();
  }, []);

  const handleInsert = () => {
    setActiveComponent("inputForm");
  };

  const handleInsertForm = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:8000/API/v1/Moomeadows/Kambing",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jenisKambing,
          jenisKelamin,
          umur,
          berat,
          kondisi,
        }),
      }
    );

    if (response.ok) {
      // Insert data berhasil, tutup input form
      setActiveComponent(null);
      // Jika diperlukan, reset nilai input form
      setJenisKambing("");
      setJeniskelamin("");
      setUmur("");
      setBerat("");
      setKondisi("");
    } else {
      // Tangani error jika insert data gagal
      console.error("Error inserting data:", response.status);
    }
  };

  const handleClose = () => {
    setActiveComponent(null);
  };

  const handleUpdate = (idkambing) => {
    setActiveComponent("updateForm");
    setSelectedIdKambing(idkambing);
  };

  const handleUpdateForm = async () => {
    const response = await fetch(
      `http://localhost:8000/API/v1/Moomeadows/Kambing`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kondisi: updateKondisi,
          idkambing: selectedIdKambing,
        }),
      }
    );

    if (response.ok) {
      setActiveComponent(null);
      console.log("data di update");
    }
  };

  const handleButton = (idkambing) => {
    setSelectDelete(idkambing)
    handleDeleteForm()
  };

  const handleDeleteForm = async () => {
    const response = await fetch(
      `http://localhost:8000/API/v1/Moomeadows/Kambing/${selectDelete}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.ok) {
      console.log("data di Hapus");
    }
  };
  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-6 ">
      <h1 className="text-center text-2xl py-3">Data Kambing</h1>
      <div className="overflow-y-auto h-[50vh]">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Id Kambing</th>
              <th className="px-4 py-2">Jenis Kambing</th>
              <th className="px-4 py-2">Jenis Kelamin</th>
              <th className="px-4 py-2">Umur</th>
              <th className="px-4 py-2">Kondisi</th>
              <th className="px-4 py-2">Berat</th>
              <th className="px-4 py-2">action</th>
            </tr>
          </thead>
          <tbody>
            {hewan.map((row) => (
              <tr key={row.idkambing}>
                <td className="border px-4 py-2">{row.idkambing}</td>
                <td className="border px-4 py-2">{row.jenis_kambing}</td>
                <td className="border px-4 py-2">{row.jenis_kelamin}</td>
                <td className="border px-4 py-2">{row.umur}</td>
                <td className="border px-4 py-2">{row.kondisi}</td>
                <td className="border px-4 py-2">{row.berat}</td>
                <td className="border px-4 py-2 flex flex-col gap-2 ">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleButton(row.idkambing)}
                  >
                    Hapus
                  </button>
                  <button
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleUpdate(row.idkambing)}
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
        onClick={handleInsert}
      >
        Insert
      </button>

      {activeComponent === "inputForm" && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded w-[400px] flex flex-col gap-5">
            <div className=" w-full flex flex-row justify-between">
              <div className="">
                <h2 className="font-bold text-2xl">MASUKAN DATA KAMBING</h2>
              </div>
              <div className="">
                <button
                  onClick={handleClose}
                  className="font-bold text-2xl text-[red]"
                >
                  X
                </button>
              </div>
            </div>

            <div>
              <form className="flex flex-col gap-5" onSubmit={handleInsertForm}>
                <input
                  type="text"
                  placeholder="Jenis Kambing"
                  className="border-black border-2 rounded-xl p-2"
                  value={jenisKambing}
                  onChange={(e) => setJenisKambing(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Jenis Kelamin"
                  className="border-black border-2 rounded-xl p-2"
                  value={jenisKelamin}
                  onChange={(e) => setJeniskelamin(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Umur"
                  className="border-black border-2 rounded-xl p-2"
                  value={umur}
                  onChange={(e) => setUmur(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Berat"
                  className="border-black border-2 rounded-xl p-2"
                  value={berat}
                  onChange={(e) => setBerat(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Kondisi"
                  className="border-black border-2 rounded-xl p-2"
                  value={kondisi}
                  onChange={(e) => setKondisi(e.target.value)}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}

      {activeComponent === "updateForm" && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded w-[400px] flex flex-col gap-5">
            <div className=" w-full flex flex-row justify-between">
              <div className="">
                <h2 className="font-bold text-2xl">UPDATE DATA KAMBING</h2>
              </div>
              <div className="">
                <button
                  onClick={handleClose}
                  className="font-bold text-2xl text-[red]"
                >
                  X
                </button>
              </div>
            </div>

            <div>
              <form className="flex flex-col gap-5" onSubmit={handleUpdateForm}>
                <input
                  type="text"
                  placeholder="Kondisi"
                  className="border-black border-2 rounded-xl p-2"
                  value={updateKondisi}
                  onChange={(e) => setUpdateKondisi(e.target.value)}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableDataKambing;
