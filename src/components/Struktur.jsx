import React, { useState } from 'react';
import Card from './CardStruktur';
import Modal from './ModalStruktur';
import backgroundImage from '../assets/img_lambang.svg';

const Section = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImageData, setSelectedImageData] = useState(null);

  const data = [
    {
      id: 1,
      image: '../../src/assets/img-camat1.jpg',
      name: 'Musra Y. Peluru, S.Sos',
      position: 'CAMAT',
      period: '2020 - 2023',
    },
    {
      id: 2,
      image: '../../src/assets/img-camat1.jpg',
      name: 'Sofyan Lawento, SH',
      position: 'SEKRETARIS CAMAT',
      period: '2019 - 2022',
    },
    {
        id: 3,
        image: '../../src/assets/img-camat1.jpg',
        name: 'Serlin Tarakolo, S.Sos',
        position: 'SUBAG UMUM DAN KEPEGAWAIAN',
        period: '2024 - 2040',
      },
      {
        id: 4,
        image: '../../src/assets/img-camat1.jpg',
        name: 'Yames Rizal Tiri',
        position: 'SUBAG KEUANGAN',
        period: '2024 - 2040',
      },
      {
        id: 5,
        image: '../../src/assets/img-camat1.jpg',
        name: "Meyske Ponda'ag, S.Sos",
        position: 'KASI PEMERINTAHAN',
        period: '2024 - 2040',
      },
      {
        id: 6,
        image: '../../src/assets/img-camat1.jpg',
        name: "Asna DG. Leba, S.Sos",
        position: 'KASI TRANTIB',
        period: '2024 - 2040',
      },
      {
        id: 7,
        image: '../../src/assets/img-camat1.jpg',
        name: "Burce A. Maroso, S.Sos",
        position: 'KASI EKBANG',
        period: '2024 - 2040',
      },
      {
        id: 8,
        image: '../../src/assets/img-camat1.jpg',
        name: "Olif. M. Ambanaga, S.Sos",
        position: 'KASI PMK',
        period: '2024 - 2040',
      },
      {
        id: 8,
        image: '../../src/assets/img-camat1.jpg',
        name: "Deddy F. Rompas, S.Sos",
        position: 'KASI DATA DAN STATISTIK',
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
    <section className="flex flex-col items-center justify-center mb-8" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundColor: '#F3F3F3' }} id="section3">
      <div className='text-4xl mt-20 mb-4 font-bold font-poppins'>
        <h1>Struktur Kecamatan Lore Utara</h1>
      </div>
      <div className="flex flex-col w-full items-center mt-20 mb-4 gap-4">
        <div className="flex flex-col w-80 items-center gap-2">
          <Card
            key={data[0].id}
            image={data[0].image}
            name={data[0].name}
            position={data[0].position}
            period={data[0].period}
            onClick={() => handleCardClick(data[0])}
          />
          </div>
          <div className="flex flex-col w-full items-center mt-4 ">
            <div className='flex mx-auto ml-auto justify-center w-60'>
            <Card
            key={data[1].id}
            image={data[1].image}
            name={data[1].name}
            position={data[1].position}
            period={data[1].period}
            onClick={() => handleCardClick(data[1])}
          />
            </div>
            <div className='flex justify-center mt-8 gap-10 px-4 w-1/2'>
            {/* {data.slice(1).map((item) => ( */}
              <Card 
                key={data[2].id}
                image={data[2].image}
                name={data[2].name}
                position={data[2].position}
                period={data[2].period}
                onClick={() => handleCardClick(data[2])}
              />
              <Card 
                key={data[3].id}
                image={data[3].image}
                name={data[3].name}
                position={data[3].position}
                period={data[3].period}
                onClick={() => handleCardClick(data[3])}
              />
            {/* ))} */}
            </div>
          </div>
        <div className="flex justify-center mt-8 gap-10 px-8 mb-10">
          {data.slice(4).map((item) => (
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
  );
};

export default Section;