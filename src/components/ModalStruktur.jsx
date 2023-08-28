import React from 'react';

const ModalStruktur = ({ image, name, position, period, toggleModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 flex flex-col items-center justify-center">
        <img className="w-50 h-60 object-cover" src={image} alt="Gambar Modal" />
        <div className="mt-4">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-700">{position}</p>
          <p className="text-gray-700">{period}</p>
        </div>
        <div className="org-lines">
          <div className="org-line"></div>
          <div className="org-line"></div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={toggleModal}
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

export default ModalStruktur;