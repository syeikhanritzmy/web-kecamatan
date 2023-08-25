import React from "react";
// import KecamatanItem from "./KecamatanItem";
import backgroundImage from '../assets/img-camat.jpg';
import SlideAnimation from "./SlideAnimation";

const Profil = () => {
    return (
      <div className="flex h-screen" id="section2">
        <div className="w-1/3 bg-gray-200 ">
        <div className="object-cover h-full" style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh'  }} ></div>
          {/* Konten bagian kiri */}
        </div>
        <div className="flex-1 flex justify-center items-center">
            <SlideAnimation/>
          {/* Konten bagian kanan */}
        </div>
      </div>
    );
  };
  
  export default Profil;
