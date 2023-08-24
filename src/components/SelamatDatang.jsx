import React from 'react';
import backgroundImage from '../assets/img-kantor-camat.jpg';


function SelamatDatang() {
  return (
    <div id='section1'>
      <div className="relative bg-cover bg-blur-sm" style={{ backgroundImage: `url(${backgroundImage})`, height: '90vh' }} >
      <div className="absolute flex flex-col items-left mt-80 m">
          <h1 className="text-4xl font-bold text-white ml-40 mt-20">Selamat Datang</h1>
          <h1 className="text-4xl font-bold text-white ml-40">Di Kecamatan Lore Utara</h1>
       </div>
      </div>
    </div>
  );
};

export default SelamatDatang;