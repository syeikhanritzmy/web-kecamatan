import React from 'react'

const DataLayananItem = ({ imageUrl }) => {
  return (
    <div>
      <div className={`bg-[url('${imageUrl}')] w-40 h-40 shadow-xl bg-cover`}>
      </div>
    </div>
  )
}

export default DataLayananItem