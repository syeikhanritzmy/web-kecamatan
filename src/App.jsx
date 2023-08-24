import { useState } from 'react'
import DataKecamatan from './components/DataKecamatan'
import DataDesa from './components/DataDesa'
import DataLayanan from './components/DataLayanan'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SelamatDatang from './components/SelamatDatang'

function App() {

  return (
    <>
      <SelamatDatang/>
      <DataKecamatan />
      <DataDesa />
      <DataLayanan />
      <Footer />
    </>
  )
}

export default App
