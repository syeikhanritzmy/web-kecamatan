import React from 'react';
import DataLayananItem from './DataLayananItem';

const DataLayanan = () => {
  return (
    <div className="w-11/12 m-auto mt-40 flex flex-col items-center my-20">
      <div>data layanan</div>
      <div className='flex w-full justify-evenly'>
        {' '}
        <div>
          <DataLayananItem imageUrl={`https://robohash.org/stefan-three`} />
        </div>
        <div>
          <DataLayananItem imageUrl={`https://robohash.org/stefan-three`} />
        </div>
        <div>
          <DataLayananItem imageUrl={`https://robohash.org/stefan-three`} />
        </div>
      </div>
    </div>
  );
};

export default DataLayanan;
