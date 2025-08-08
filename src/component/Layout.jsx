import React from 'react'
import Header from './Headers/Header'
import Content from './contents/Content'
import Footer from './Footers/Footer'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Layout
