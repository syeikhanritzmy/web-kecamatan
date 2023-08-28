import React from "react";
// import KecamatanItem from "./KecamatanItem";
import backgroundImage from '../assets/img_camat.png';
import SlideAnimation from "./SlideAnimation";

const Profil = () => {
  return (
    <div className="flex h-screen" id="section2">
      <div className="w-1/3 bg-gray-200 relative">
        <div className="object-cover h-full bg-cover bg-center animate-slide-fade " style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <SlideAnimation />
        {/* Konten bagian kanan */}
      </div>
    </div>
    
  );
};
  
  export default Profil;