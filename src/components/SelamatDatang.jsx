import React from "react";
import backgroundImage from "../assets/img-kantor-camat.png";

function SelamatDatang() {
  return (
    <div id="section1">
      <div className="relative bg-cover bg-blur-sm inset-0 bg-black " style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh' }}>
        <div className="absolute flex flex-col items-start left-20 top-20 ml-8 mt-20">
          <h1 className="text-4xl font-bold text-white mb-4 font-poppins">Selamat Datang</h1>
          <h1 className="text-4xl font-bold text-white font-poppins">Di Kecamatan Lore Utara</h1>
        </div>
      </div>
    </div>
  );
}

export default SelamatDatang;
