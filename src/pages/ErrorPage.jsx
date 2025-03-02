import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className='bg-white md:flex justify-center items-center'>
      <div className=' min-h-screen px-6 py-12  '>
    
          <p className='text-2xl font-bold text-red-700'>404 error</p>
          <h1 className='mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
            Page not found
          </h1>
          <p className='mt-4 text-gray-500 dark:text-gray-400'>
            Sorry, the page you are looking for doesnt exist.
          </p>

          <div className='flex items-center mt-6 gap-x-3'>
            

            <Link
              to='/'
              className='w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-900 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600'
            >
              Take me home
            </Link>
          </div>
        
      </div>
    </section>
  )
};

export default ErrorPage;