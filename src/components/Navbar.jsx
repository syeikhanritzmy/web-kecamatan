import React from 'react';
import { Link } from 'react-scroll';
import KecamatanItem from "./KecamatanItem";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-12 py-2 bg-cyan-600">
    <div className="mr-4">
    <KecamatanItem imgUrl={'https://avatars.dicebear.com/api/bottts/stefan.svg'}/>
    </div>
    <ul className="flex space-x-14 mr-14">
      {/* Tambahkan item navbar di sini */}
      <li>
          <Link to="section1" smooth={true} duration={500} className="text-black cursor-pointer">Home</Link>
        </li>
        <li>
          <Link to="section2" smooth={true} duration={500} className="text-black cursor-pointer">Profil</Link>
        </li>
        <li>
          <Link to="section3" smooth={true} duration={500} className="text-black cursor-pointer">Struktur</Link>
        </li>
        <li>
          <Link to="section4" smooth={true} duration={500} className="text-black cursor-pointer">Data Kecamatan</Link>
        </li>
        <li>
          <Link to="section5" smooth={true} duration={500} className="text-black cursor-pointer">Kontak</Link>
        </li>
    </ul>
  </nav>
  );
}

export default Navbar;