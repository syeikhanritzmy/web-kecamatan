import { useState } from 'react'
import DataKecamatan from './components/DataKecamatan'
import DataDesa from './components/DataDesa'
import DataLayanan from './components/DataLayanan'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SelamatDatang from './components/SelamatDatang'
import Profil from './components/Profil'
import Struktur from './components/Struktur'

function App() {

  return (
    <>
    <Navbar/>
      <SelamatDatang/>
      <Profil/>
      <Struktur/>
      <DataKecamatan />
      <DataDesa />
      <DataLayanan />
      <Footer />
    </>
  )
}

export default App
