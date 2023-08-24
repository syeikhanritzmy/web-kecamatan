import KecamatanItem from "./KecamatanItem"
import Navbar from "./Navbar"

const DataKecamatan = () => {
  return (
    <>
      <div className="" id="section4">x
        <div className="flex text-3xl justify-center font-bold">Data Kecamatan</div>
        <div className="h-44 w-11/12 m-auto shadow-lg flex justify-around items-center">
          <KecamatanItem imgUrl={'https://avatars.dicebear.com/api/bottts/stefan.svg'} name={'data A'} />
          <KecamatanItem imgUrl={'https://avatars.dicebear.com/api/bottts/stefan.svg'} name={'data A'} />
          <KecamatanItem imgUrl={'https://avatars.dicebear.com/api/bottts/stefan.svg'} name={'data A'} />
          <KecamatanItem imgUrl={'https://avatars.dicebear.com/api/bottts/stefan.svg'} name={'data A'} />
          <KecamatanItem imgUrl={'https://avatars.dicebear.com/api/bottts/stefan.svg'} name={'data A'} />
          <KecamatanItem imgUrl={'https://avatars.dicebear.com/api/bottts/stefan.svg'} name={'data A'} />
        </div>
      </div>
    </>
  )
}

export default DataKecamatan