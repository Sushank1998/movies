// import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navgivation/navbar'
import Footer from '../navgivation/Footer'

function AppLayout() {
  return (
<>
      <Navbar/>
      <Outlet/>
      <Footer/>
</>
   
  )
}

export default AppLayout
