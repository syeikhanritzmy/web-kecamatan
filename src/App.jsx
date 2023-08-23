import { useState } from 'react'
import DataKecamatan from './components/DataKecamatan'
import DataDesa from './components/DataDesa'
import DataLayanan from './components/DataLayanan'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <DataKecamatan />
      <DataDesa />
      <DataLayanan />
      <Footer />
    </>
  )
}

export default App
