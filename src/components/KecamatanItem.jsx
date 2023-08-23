import React from 'react'

const KecamatanItem = ({ imgUrl, name }) => {
  return (
    <div className=''>
      <div className='text-center'>
        <img src={imgUrl} className='rounded-full h-24' alt="" />
        <div>{name}</div>
      </div>
    </div>
  )
}

export default KecamatanItem