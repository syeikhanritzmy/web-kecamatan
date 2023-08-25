import React from 'react';
import backgroundImage from '../assets/img-kantor-camat.jpg';


function SelamatDatang() {
  return (
    <div id='section1'>
      <div className="relative bg-cover bg-blur-sm" style={{ backgroundImage: `url(${backgroundImage})`, height: '99vh' }} >
      <div className="absolute flex flex-col items-left mt-80 m">
          <h1 className="text-4xl font-bold text-black ml-40 mt-40">Selamat Datang</h1>
          <h1 className="text-4xl font-bold text-black ml-40">Di Kecamatan Lore Utara</h1>
       </div>
      </div>
    </div>
  );
};

export default SelamatDatang;