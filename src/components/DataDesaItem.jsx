import React from 'react'

const DataDesaItem = ({ imgurl, name }) => {
  return (
    <div className={`bg-[url('${imgurl}')] h-44 w-44 bg-cover`}>
      <div>{name}</div>
    </div>
  )
}

export default DataDesaItem