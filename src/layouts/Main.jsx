import React from 'react';
import { Outlet } from 'react-router-dom';


const Main = () => {
  return (
    <div className='bg-gray-200'>
    {/* Navbar */}
   
    {/* Outlet */}
    <div className=' min-h-[calc(100vh-306px)]'>
      <Outlet />
    </div>
    {/* Footer */}
    
  </div>
  );
};

export default Main;