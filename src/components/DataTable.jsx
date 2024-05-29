import React, { useEffect, useState } from "react";
import axios from 'axios'


const DataTable = () => {
  const [kambingData, setKambingData] = useState([]);
  const [babiData, setBabiData] = useState([]);
  const [sapiData, setSapiData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const kambingResponse = await axios.get(
        "http://localhost:8000/API/v1/Moomeadows/Kambing"
      );
      const babiResponse = await axios.get(
        "http://localhost:8000/API/v1/Moomeadows/Babi"
      );

      const sapiResponse = await axios.get(
        "http://localhost:8000/API/v1/Moomeadows/Sapi"
      );
      setKambingData(kambingResponse.data);
      setBabiData(babiResponse.data);
      setSapiData(sapiResponse.data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-between items-center mb-4 mx-4">
        <div>
          <select
            className="px-4 py-2 bg-gray-200 rounded-md"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">Pilih Hewan</option>
            <option value="kambing">Kambing</option>
            <option value="babi">Babi</option>
            <option value="sapi">Sapi</option>
          </select>
        </div>
      </div>
      
      {selectedOption === "kambing" && (
        <div className="grid grid-cols-5 gap-4 mx-4">
          {kambingData.map((kambing, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-lg font-bold">Kambing {index + 1}</h3>
              <p>Berat: {kambing.berat} kg</p>
              <p>Umur: {kambing.umur} tahun</p>
            </div>
          ))}
        </div>
      )}

      {selectedOption === "sapi" && (
        <div className="grid grid-cols-5 gap-4 mx-4">
          {sapiData.map((sapi, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-lg font-bold">Sapi {index + 1}</h3>
              <p>Berat: {sapi.berat} kg</p>
              <p>Umur: {sapi.umur} tahun</p>
            </div>
          ))}
        </div>
      )}

      {selectedOption === "babi" && (
        <div className="grid grid-cols-5 gap-4 mx-4">
          {babiData.map((babi, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-lg font-bold">Babi {index + 1}</h3>
              <p>Berat: {babi.berat} kg</p>
              <p>Umur: {babi.umur} tahun</p>
            </div>
          ))}
        </div>
      )}


    </div>
  );
};

export default DataTable;
