import { useState } from 'react'
import DataKecamatan from './components/DataKecamatan'
import DataDesa from './components/DataDesa'
import DataLayanan from './components/DataLayanan'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <DataKecamatan />
      <DataDesa />
      <DataLayanan />
      <Footer />
    </>
  )
}

export default App
