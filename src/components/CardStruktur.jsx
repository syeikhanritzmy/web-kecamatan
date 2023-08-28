import React, { useState } from 'react';
import Modal from './ModalStruktur';

const Card = ({ image, name, position, period }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="min-w-min rounded-t-3xl overflow-hidden shadow-lg bg-white w-25">
      <img className="w-full " src={image} alt="Gambar Card" />
      <div className="px-6 py-4 flex flex-col items-center justify-center">
      <div className="font-bold text-x mb-2 text-center">{name}</div>
      <div className="font text-xs mb-2 text-center">{position}</div>
      <div className="font text-xs mb-2 text-center">{period}</div>
    </div>
    
      {showModal && (
        <Modal image={image} name={name} position={position} period={period} toggleModal={toggleModal} />
      )}
    </div>
  );
};

export default Card;