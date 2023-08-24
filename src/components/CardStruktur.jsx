import React, { useState } from 'react';
import Modal from './ModalStruktur';

const Card = ({ image, name, position, period }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt="Gambar Card" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleModal}
        >
          Lihat Detail
        </button>
      </div>
      {showModal && (
        <Modal image={image} name={name} position={position} period={period} toggleModal={toggleModal} />
      )}
    </div>
  );
};

export default Card;