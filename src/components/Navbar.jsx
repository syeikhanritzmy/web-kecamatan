import React from 'react';
import KecamatanItem from "./KecamatanItem"

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-12 py-2 bg-cyan-600">
    <div className="mr-4">
    <KecamatanItem imgUrl={'https://avatars.dicebear.com/api/bottts/stefan.svg'}/>
    </div>
    <ul className="flex space-x-14 mr-14">
      {/* Tambahkan item navbar di sini */}
      <li><a href="/" className="text-black">Home</a></li>
      <li><a href="/about" className="text-black">About</a></li>
      <li><a href="/services" className="text-black">Services</a></li>
      <li><a href="/contact" className="text-black">Contact</a></li>
    </ul>
  </nav>
  );
}

export default Navbar;