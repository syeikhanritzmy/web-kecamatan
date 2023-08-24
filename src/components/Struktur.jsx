import React, { useState } from 'react';
import Card from './CardStruktur';
import Modal from './ModalStruktur';

const Section = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImageData, setSelectedImageData] = useState(null);

  const data = [
    {
      id: 1,
      image: 'gambar1.jpg',
      name: 'John Doe',
      position: 'Manager',
      period: '2020 - 2023',
    },
    {
      id: 2,
      image: 'gambar2.jpg',
      name: 'Jane Smith',
      position: 'Developer',
      period: '2019 - 2022',
    },
    {
        id: 3,
        image: 'gambar3.jpg',
        name: 'Tri',
        position: 'Senior Developer',
        period: '2024 - 2040',
      },
    // Tambahkan data card lainnya sesuai kebutuhan
  ];

  const handleCardClick = (imageData) => {
    setSelectedImageData(imageData);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImageData(null);
    setShowModal(false);
  };

  return (
    <section className="flex flex-wrap justify-center" id='section3'>
      {data.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          name={item.name}
          position={item.position}
          period={item.period}
          onClick={() => handleCardClick(item)}
        />
      ))}
      {showModal && (
        <Modal
          image={selectedImageData.image}
          name={selectedImageData.name}
          position={selectedImageData.position}
          period={selectedImageData.period}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Section;