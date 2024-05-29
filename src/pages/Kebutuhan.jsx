import React, { useEffect, useState } from "react";
import { Navigation } from "../components/Navigation";

const Kebutuhan = () => {
  const [kebutuhan, setKebutuhan] = useState([]);
  const [activeComponent, setActiveComponent] = useState(null);
  const [selectedId, setSelectedId] = useState("");
  const [selectDelete, setSelectDelete] = useState("");
  const [jenisKebutuhan, setJenisKebutuhan] = useState("");
  const [Nama, setNama] = useState("");
  const [Kuantitas, setKuantitas] = useState("");
  const [updateKondisi, setUpdateKondisi] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8000/API/v1/Moomeadows/Kebutuhan"
      );
      const data = await response.json();
      setKebutuhan(data);
    };
    fetchData();
  }, []);

  const handleClose = () => {
    setActiveComponent(null);
  };

  const handleInsert = () => {
    setActiveComponent("inputForm");
  };

  const handleInsertForm = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:8000/API/v1/Moomeadows/Kebutuhan",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jenisKebutuhan,
          Nama,
          Kuantitas,
        }),
      }
    );

    if (response.ok) {
      // Insert data berhasil, tutup input form
      setActiveComponent(null);
      // Jika diperlukan, reset nilai input form
      setJenisKebutuhan("");
      setNama("");
      setKuantitas("");
    } else {
      // Tangani error jika insert data gagal
      console.error("Error inserting data:", response.status);
    }
  };

  const handleUpdate = (index) => {
    setActiveComponent("updateForm");
    setSelectedId(index);
  };

  const handleUpdateForm = async () => {
    const response = await fetch(
      `http://localhost:8000/API/v1/Moomeadows/Kebutuhan`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kuantitas: updateKondisi,
          idkebutuhan: selectedId,
        }),
      }
    );

    if (response.ok) {
      setActiveComponent(null);
      console.log("data di update");
    }
  };

  const handleDelete = (index) => {
    setSelectDelete(index);
    handleDeleteForm()
  };

  const handleDeleteForm = async () => {
    const response = await fetch(
      `http://localhost:8000/API/v1/Moomeadows/Kebutuhan/${selectDelete}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.ok) {
      console.log("data di Hapus");
    }
  };

  const handleSort = (sortBy) => {
    if (sortBy === "Normal") {
      const fetchData = async () => {
        const response = await fetch(
          "http://localhost:8000/API/v1/Moomeadows/Kebutuhan"
        );
        const data = await response.json();
        setKebutuhan(data);
      };
      fetchData();
    } else if (sortBy === "Jenis Kebutuhan") {
      setKebutuhan((prevKebutuhan) =>
        [...prevKebutuhan].sort((a, b) =>
          a.jenis_kebutuhan.localeCompare(b.jenis_kebutuhan)
        )
      );
    } else if (sortBy === "Kuantitas") {
      setKebutuhan((prevKebutuhan) =>
        [...prevKebutuhan].sort((a, b) => b.kuantitas - a.kuantitas)
      );
    } else {
      setActiveComponent(null);
    }
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
              <option value="Normal">Default</option>
              <option value="Jenis Kebutuhan">Jenis Kebutuhan</option>
              <option value="Kuantitas">Kuantitas</option>
            </select>
          </div>
          <div className="overflow-y-auto h-[70vh]">
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
                {kebutuhan.map((row, index) => (
                  <tr key={row.idkebutuhan} className="odd:bg-gray-100">
                    <td className="border px-4 py-2">{row.idkebutuhan}</td>
                    <td className="border px-4 py-2">{row.jenis_kebutuhan}</td>
                    <td className="border px-4 py-2">{row.nama}</td>
                    <td className="border px-4 py-2">{row.kuantitas}</td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => handleUpdate(row.idkebutuhan)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded"
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(row.idkebutuhan)}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {activeComponent === "inputForm" && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white p-4 rounded w-[400px] flex flex-col gap-5">
                <div className=" w-full flex flex-row justify-between">
                  <div className="">
                    <h2 className="font-bold text-2xl">
                      MASUKAN DATA KEBUTUHAN
                    </h2>
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
                    onSubmit={handleInsertForm}
                  >
                    <input
                      type="text"
                      placeholder="jenis Kebutuhan"
                      className="border-black border-2 rounded-xl p-2"
                      value={jenisKebutuhan}
                      onChange={(e) => setJenisKebutuhan(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Nama"
                      className="border-black border-2 rounded-xl p-2"
                      value={Nama}
                      onChange={(e) => setNama(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Kuantitas"
                      className="border-black border-2 rounded-xl p-2"
                      value={Kuantitas}
                      onChange={(e) => setKuantitas(e.target.value)}
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
                    <h2 className="font-bold text-2xl">
                      UPDATE DATA KEBUTUHAN
                    </h2>
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
                      placeholder="Kuantitas"
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
      </div>
    </>
  );
};

export default Kebutuhan;
