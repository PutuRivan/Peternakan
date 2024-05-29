import React, { useEffect, useState } from "react";

const TableDataBabi = () => {
  const [hewan, setHewan] = useState([]);
  const [activeComponent, setActiveComponent] = useState(null);
  const [jenisBabi, setJenisBabi] = useState("");
  const [jenisKelamin, setJeniskelamin] = useState("");
  const [umur, setUmur] = useState("");
  const [berat, setBerat] = useState("");
  const [kondisi, setKondisi] = useState("");
  const [updateKondisi, setUpdateKondisi] = useState("");
  const [selectedIdBabi, setSelectedIdBabi] = useState("");
  const [selectDelete, setSelectDelete] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8000/API/v1/Moomeadows/Babi"
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
      "http://localhost:8000/API/v1/Moomeadows/Babi",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jenisBabi,
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
      setJenisBabi("");
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

  const handleUpdate = (idbabi) => {
    setActiveComponent("updateForm");
    setSelectedIdBabi(idbabi);
  };

  const handleUpdateForm = async () => {
    const response = await fetch(
      `http://localhost:8000/API/v1/Moomeadows/Babi`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kondisi: updateKondisi,
          idbabi: selectedIdBabi,
        }),
      }
    );

    if (response.ok) {
      setActiveComponent(null);
      console.log("data di update");
    }
  };

  const handleButton = (idbabi) => {
    setSelectDelete(idbabi)
    handleDeleteForm()
  };

  const handleDeleteForm = async () => {
    const response = await fetch(
      `http://localhost:8000/API/v1/Moomeadows/Babi/${selectDelete}`,
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
      <h1 className="text-center text-2xl py-3">Data Babi</h1>
      <div className="overflow-y-auto h-[50vh]">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Id Babi</th>
              <th className="px-4 py-2">Jenis Babi</th>
              <th className="px-4 py-2">Jenis Kelamin</th>
              <th className="px-4 py-2">Umur</th>
              <th className="px-4 py-2">Kondisi</th>
              <th className="px-4 py-2">Berat</th>
              <th className="px-4 py-2">action</th>
            </tr>
          </thead>
          <tbody>
            {hewan.map((item) => (
              <tr key={item.idbabi}>
                <td className="border px-4 py-2">{item.idbabi}</td>
                <td className="border px-4 py-2">{item.jenis_babi}</td>
                <td className="border px-4 py-2">{item.jenis_kelamin}</td>
                <td className="border px-4 py-2">{item.umur}</td>
                <td className="border px-4 py-2">{item.kondisi}</td>
                <td className="border px-4 py-2">{item.berat}</td>
                <td className="border px-4 py-2 flex flex-col gap-2 ">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleButton(item.idbabi)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleUpdate(item.idbabi)}
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
                <h2 className="font-bold text-2xl">MASUKAN DATA BABI</h2>
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
                  placeholder="Jenis Babi"
                  className="border-black border-2 rounded-xl p-2"
                  value={jenisBabi}
                  onChange={(e) => setJenisBabi(e.target.value)}
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
                <h2 className="font-bold text-2xl">UPDATE DATA BABI</h2>
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

export default TableDataBabi;
