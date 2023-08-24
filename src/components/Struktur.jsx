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
      {
        id: 3,
        image: 'gambar3.jpg',
        name: 'Anggota 1',
        position: 'Anggota',
        period: '2024 - 2040',
      },
      {
        id: 4,
        image: 'gambar4.jpg',
        name: 'Anggota 2',
        position: 'Anggota',
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
    <section className="flex flex-col items-center justify-center" id="section3">
      <div className='text-6xl mt-2 mb-8 font-bold'>
        <h1>Struktur Kecamatan Lore Utara</h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <Card
            key={data[0].id}
            image={data[0].image}
            name={data[0].name}
            position={data[0].position}
            period={data[0].period}
            onClick={() => handleCardClick(data[0])}
          />
          </div>
          <div className="flex flex-col items-center mt-4">
          <Card
            key={data[1].id}
            image={data[1].image}
            name={data[1].name}
            position={data[1].position}
            period={data[1].period}
            onClick={() => handleCardClick(data[1])}
          />
          </div>
        <div className="flex justify-center mt-8">
          {data.slice(2).map((item) => (
            <Card
              key={item.id}
              image={item.image}
              name={item.name}
              position={item.position}
              period={item.period}
              onClick={() => handleCardClick(item)}
            />
          ))}
        </div>
      </div>
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
    // <section className="flex flex-col items-center justify-center border-2" id='section3'>
    //   <div className='flex flex-col'>
    //   {data.map((item) => (
    //     <Card
    //       key={item.id}
    //       image={item.image}
    //       name={item.name}
    //       position={item.position}
    //       period={item.period}
    //       onClick={() => handleCardClick(item)}
    //     />
    //   ))}
    //   </div>
    //   {showModal && (
    //     <Modal
    //       image={selectedImageData.image}
    //       name={selectedImageData.name}
    //       position={selectedImageData.position}
    //       period={selectedImageData.period}
    //       onClose={closeModal}
    //     />
    //   )}
    // </section>
  );
};

export default Section;