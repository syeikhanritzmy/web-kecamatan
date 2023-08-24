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
        <h1 className="text-4xl text-black font-bold">Visi : </h1>
        <h2 className='text-4xl text-whit'>Kecamatan Bagus </h2>
        <h1 className="text-4xl text-black font-bold">Misi : </h1>
        <h2 className='text-4xl text-whit'>Kecamatan Ganteng </h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-black font-bold">Sejarah</h1>
        <p className='text-4xl text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro fugit natus cum quisquam quis iure, <br />
        reprehenderit veritatis perspiciatis officiis esse ab</p>
      </div>
    </Carousel>
  );
};

export default SlideAnimation;