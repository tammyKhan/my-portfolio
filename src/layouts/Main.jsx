import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Main = () => {
  return (
    <div className='bg-white text-black dark:bg-black dark:text-gray-100'>
    {/* Navbar */}
      <Navbar></Navbar>
    {/* Outlet */}
    <div className=''>
      <Outlet />
    </div>
    {/* Footer */}
    <Footer></Footer>

  </div>
  );
};

export default Main;