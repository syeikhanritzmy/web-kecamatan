import React, { useState } from 'react'
import DataDesaItem from './DataDesaItem'
import ModalDesa from './ModalDesa'

const DataDesa = () => {
  const [selectedItem, setSelectedItem] = useState(null)
  const toggleModal = (item) => {
    setSelectedItem(prevItem => prevItem === item ? null : item)
  }
  return (
    <div className='flex justify-center mt-8 flex-col items-center'>
      <div>DataDesa</div>
      <div className='flex w-[800px] h-auto py-4  m-auto gap-5 justify-center flex-wrap items-center'>
        <div onClick={() => toggleModal('data')} > {/** ini toggle harusnya pakai perulangan biar data yang kena klik di simpan di state */}
          <DataDesaItem imgurl={`https://images.pexels.com/photos/16228243/pexels-photo-16228243/free-photo-of-scenery.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} name={'napu coba di click'} />
        </div>

        <div onClick={() => toggleModal('data')} > {/** ini toggle harusnya pakai perulangan biar data yang kena klik di simpan di state */}
          <DataDesaItem imgurl={`https://images.pexels.com/photos/16228243/pexels-photo-16228243/free-photo-of-scenery.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} name={'napu coba di click'} />
        </div>

        <div onClick={() => toggleModal('data')} > {/** ini toggle harusnya pakai perulangan biar data yang kena klik di simpan di state */}
          <DataDesaItem imgurl={`https://images.pexels.com/photos/16228243/pexels-photo-16228243/free-photo-of-scenery.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} name={'napu coba di click'} />
        </div>

        <div onClick={() => toggleModal('data')} > {/** ini toggle harusnya pakai perulangan biar data yang kena klik di simpan di state */}
          <DataDesaItem imgurl={`https://images.pexels.com/photos/16228243/pexels-photo-16228243/free-photo-of-scenery.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} name={'napu coba di click'} />
        </div>

        <div onClick={() => toggleModal('data')} > {/** ini toggle harusnya pakai perulangan biar data yang kena klik di simpan di state */}
          <DataDesaItem imgurl={`https://images.pexels.com/photos/16228243/pexels-photo-16228243/free-photo-of-scenery.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} name={'napu coba di click'} />
        </div>

      </div>
      <ModalDesa isOpen={!!selectedItem} onClose={toggleModal}><h1>DATA DESA ITEM</h1>
        <div className='flex w-full justify-between'>
          <div>
            disini gambar
          </div>
          <div>disni deskripsi {selectedItem}</div></div></ModalDesa>

    </div>
  )
}

export default DataDesa