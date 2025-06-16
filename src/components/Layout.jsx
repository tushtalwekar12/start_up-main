import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
     <div className='bg-custom container mx-auto'>
    <Header />
    <Outlet/>
    <Footer/>
   </div>
  )
}

export default Layout