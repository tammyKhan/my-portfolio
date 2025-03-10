import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Main = () => {
  return (
    <div className='bg-white dark:bg-black dark:text-gray-100'>
    {/* Navbar */}
      <Navbar></Navbar>
    {/* Outlet */}
    <div className='min-h-[calc(100vh-306px)]'>
      <Outlet />
    </div>
    {/* Footer */}
    <Footer></Footer>

  </div>
  );
};

export default Main;