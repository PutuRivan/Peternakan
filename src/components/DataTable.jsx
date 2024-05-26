import React, { useState } from 'react';

const animals = {
  goat: [
    { name: 'Kambing 1', weight: '50 kg', age: '2 tahun' },
    { name: 'Kambing 2', weight: '45 kg', age: '1 tahun' },
    { name: 'Kambing 3', weight: '55 kg', age: '3 tahun' }
  ],
  pig: [
    { name: 'Babi 1', weight: '80 kg', age: '2 tahun' },
    { name: 'Babi 2', weight: '75 kg', age: '1 tahun' },
    { name: 'Babi 3', weight: '90 kg', age: '3 tahun' }
  ],
  cow: [
    { name: 'Sapi 1', weight: '300 kg', age: '4 tahun' },
    { name: 'Sapi 2', weight: '250 kg', age: '3 tahun' },
    { name: 'Sapi 3', weight: '350 kg', age: '5 tahun' }
  ]
};

const DataTable = () => {
  const [selectedAnimal, setSelectedAnimal] = useState('');

  const handleAnimalChange = (event) => {
    setSelectedAnimal(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-between items-center mb-4 mx-4">
        <div>
          <select
            className="px-4 py-2 bg-gray-200 rounded-md"
            value={selectedAnimal}
            onChange={handleAnimalChange}
          >
            <option value="">Pilih Hewan</option>
            <option value="goat">Kambing</option>
            <option value="pig">Babi</option>
            <option value="cow">Sapi</option>
          </select>
        </div>
      </div>
      {selectedAnimal ? (
        <div className="grid grid-cols-2 gap-4 mx-4">
          {animals[selectedAnimal].map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 p-4 rounded-md"
            >
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p>Berat: {item.weight}</p>
              <p>Umur: {item.age}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center font-bold text-2xl">Silakan pilih hewan terlebih dahulu.</div>
      )}
    </div>
  );
};

export default DataTable;