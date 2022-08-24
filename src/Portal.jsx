import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './Component/Footer';
import Nav from './Component/Nav';

function Portal() {
  return (
    <>
    <Nav></Nav>
    <Outlet/>
    <Footer></Footer>
    </>
  )
}

export default Portal