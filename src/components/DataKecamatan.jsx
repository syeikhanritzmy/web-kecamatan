// import KecamatanItem from "./KecamatanItem"

const dataKecamatan = [
  {
    id: 4,
    title: 'JUMLAH DESA',
    ket: '7 Desa',
    icon: 'https://cdn-icons-png.flaticon.com/128/2163/2163350.png',
  },
  {
    id: 1,
    title: 'KODE POS',
    ket: '94651',
    icon: 'https://cdn-icons-png.flaticon.com/128/3271/3271343.png',
  },
  {
    id: 2,
    title: 'EMAIL',
    ket: 'camatlorut@gmail.com',
    icon: 'https://cdn-icons-png.flaticon.com/128/11516/11516875.png',
  },
  {
    id: 3,
    title: 'JUMLAH PENDUDUK',
    ket: '14.547 Orang',
    icon: 'https://cdn-icons-png.flaticon.com/128/11524/11524826.png',
  },
  {
    id: 5,
    title: 'LUAS WILAYAH',
    ket: '14.547 Orang',
    icon: 'https://cdn-icons-png.flaticon.com/128/2969/2969964.png',
  },
]

const DataKecamatan = () => {
  return (
    <>
      <div>
        <div className="flex lg:text-3xl text-xl justify-center font-semibold">
          Data Kecamatan Lore Utara
        </div>

        <div className="flex justify-center mt-8 overflow-auto scroll-x-auto">
          {dataKecamatan.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center w-full gap-4 p-4 mx-4 md:w-1/2 lg:w-1/3 xl:w-1/4"
            >
              <div className="flex justify-center items-center w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-lg mb-2">
                <img src={item.icon} alt="icon" className="w-16 md:w-20" />
              </div>
              <div className="text-center">
                <h1 className="font-bold text-lg md:text-xl">{item.title}</h1>
                <p className="text-gray-500 mt-1">{item.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default DataKecamatan
