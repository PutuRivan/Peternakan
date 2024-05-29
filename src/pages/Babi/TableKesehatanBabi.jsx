import React, { useEffect, useState } from "react";

const TableKesehatanBabi = () => {
  const [kesehatan, setKesehatan] = useState([]);
  const [activeComponent, setActiveComponent] = useState(null);
  const [idbabi, setIdBabi] = useState("");
  const [tanggalSakit, setTanggalSakit] = useState("");
  const [penyakit, setPenyakit] = useState("");
  const [penanganan, setPenanganan] = useState("");
  const [updatePenanganan, setUpdatePenanganan] = useState("");
  const [selectedIdBabi, setSelectedIdBabi] = useState("")
  const [selectDelete, setSelectDelete] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8000/API/v1/Moomeadows/Kesehatan_Babi"
      );
      const data = await response.json();
      setKesehatan(data);
    };

    fetchData();
  }, []);

  const handleClose = () => {
    setActiveComponent(null);
  };

  const handleInsertForm = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:8000/API/v1/Moomeadows/Kesehatan_Babi",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idbabi,
          tanggalSakit,
          penyakit,
          penanganan,
        }),
      }
    );

    if (response.ok) {
      // Insert data berhasil, tutup input form
      setActiveComponent(null);
      // Jika diperlukan, reset nilai input form
    } else {
      // Tangani error jika insert data gagal
      console.error("Error inserting data:", response.status);
    }
  };
  
  const handleInsert = () => {
    setActiveComponent("InputForm");
  };

  const handleUpdate = (idkesehatan) => {
    setActiveComponent("UpdateForm");
    setSelectedIdBabi(idkesehatan)
  };

  const handleUpdateForm = async () => {
    const response = await fetch( "http://localhost:8000/API/v1/Moomeadows/Kesehatan_Babi",{
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        penanganan: updatePenanganan,
        idkesehatan: selectedIdBabi,
      }),
    })

    if (response.ok) {
      setActiveComponent(null);
      console.log("data di update");
    }
  }

  const handleDelete = (idkesehatan) => {
    setSelectDelete(idkesehatan)
    handleDeleteRow()
  }

  const handleDeleteRow = async () => {
    const response = await fetch(
      `http://localhost:8000/API/v1/Moomeadows/Kesehatan_Babi/${selectDelete}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.ok) {
      console.log("data di Hapus");
    }
  }
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
            {kesehatan.map((row) => (
              <tr key={row.idkesehatan}>
                <td className="border px-4 py-2">{row.idkesehatan}</td>
                <td className="border px-4 py-2">{row.idbabi}</td>
                <td className="border px-4 py-2">{row.tanggal_sakit}</td>
                <td className="border px-4 py-2">{row.penyakit}</td>
                <td className="border px-4 py-2">{row.penanganan}</td>
                <td className="border px-4 py-2 flex flex-col gap-2 ">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(row.idkesehatan)}
                  >
                    Hapus
                  </button>
                  <button
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleUpdate(row.idkesehatan)}
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
      {activeComponent === "InputForm" && (
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
                  placeholder="Id Babi"
                  className="border-black border-2 rounded-xl p-2"
                  value={idbabi}
                  onChange={(e) => setIdBabi(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Tanggal Sakit"
                  className="border-black border-2 rounded-xl p-2"
                  value={tanggalSakit}
                  onChange={(e) => setTanggalSakit(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Penyakit"
                  className="border-black border-2 rounded-xl p-2"
                  value={penyakit}
                  onChange={(e) => setPenyakit(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Penanganan"
                  className="border-black border-2 rounded-xl p-2"
                  value={penanganan}
                  onChange={(e) => setPenanganan(e.target.value)}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}

      {activeComponent === "UpdateForm" && (
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
              <form
                className="flex flex-col gap-5"
                onSubmit={handleUpdateForm}
              >
                <input
                  type="text"
                  placeholder="Penanganan"
                  className="border-black border-2 rounded-xl p-2"
                  value={updatePenanganan}
                  onChange={(e) => setUpdatePenanganan(e.target.value)}
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

export default TableKesehatanBabi;
