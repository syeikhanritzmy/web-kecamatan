import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SlideAnimation = () => {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      autoPlay
      infiniteLoop
      interval={3000}
      transitionTime={500}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl text-black font-bold font-poppins">Visi: </h1>
        <h2 className="text-sm text-black pl-10 pr-10 mt-2 font-poppins">Membangun kecamatan lore utara yang mandiri, aman, dan nyaman, tangguh, serta profesional dalam 
        konteks pembangunan berkelanjutan berbasis kearifan lokal dan keagamaan </h2>
        <h1 className="text-2xl text-black font-bold mt-5 font-poppins">Misi: </h1>
        <h2 className="text-sm text-black pl-10 pr-10 mt-2 font-poppins">
        Membangun perekonomian yang mandiri dan siap bersaing dalam perkembangan ekonomi regioanal dan global serta
        Membangun kembali tatanan lingkungan yang aman dan nyaman dengan dukungan infrastruktur yang berketahanan terhadap bencana. 
        Mengembangkan sumber daya manusia yang tangguh menghadapi perkembangan global dan mampu beradaptasi terhadap bencana dan Covid-19.
        Menciptakan pemerintahan yang profesional dan selalu hadir melayani. </h2>
      </div> 
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl text-black font-bold font-poppins">Sejarah</h1>
        <p className="text-sm text-black text-justify pl-10 pr-10 mt-2 font-poppins">Kecamatan Lore Utara adalah bagian dari 
        wilayah Kabupaten Poso yang terletak di wilayah Lore. Pada zaman pemerintahan Hindia 
        Belanda sistem pemerintahan di Lore berbentuk Kerajaan yang dikenal dengan Kerajaan Lore 
        yang dipimpin oleh seorang Raja. Setelah kemerdekaan bangsa Indonesia diploklamirkan pada 
        tanggal 17-08-1945 maka semua sistem pemerintahan yang berbentuk kerajaan yang dipimpin oleh 
        Raja berubah menjadi Swapraja. Sehingga kerajaan Lore berubah menjadi Swapraja Lore.</p>
        <p className="text-sm text-black text-justify pl-10 pr-10 mt-2 font-poppins">
        Pada tahun 1963 dengan diberlakukannya undang-undang penghapusan Swapraja yang dirubah menjadi kecamatan maka Swapraja Lore yang terdiri dari 3 Distrik digabung menjadi satu wilayah Kecamatan yaitu Lore. Pada tahun 1964 Kecamatan Lore dimekarkan menjadi 2 kecamatan yaitu Kecamatan Lore Utara dan Lore Selatan. Singkat cerita semenjak terbentuknya Lore tahun 1963 s.d. 2008 total Lore telah 3 kali dimekarkan sehingga saat ini telah menjadi 6 Kecamatan.</p>
      </div>
    </Carousel>
  );
};

export default SlideAnimation;