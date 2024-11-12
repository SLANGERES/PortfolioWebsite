import React from 'react';


export const Body = () => {
  return (
    <div className='text-gray-200 bg-black'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen flex justify-center text-center mx-auto flex-col'>
        <p className='text-2xl tracking-widest m-4'>HIRE ME </p>
        <h1 className='text-5xl text-blue-500 font-bold'>SLANGERES</h1>
        <div>
          <p className='md:text-2xl text-xl pl-2 m-4 text-gray-500 uppercase'>
              I AM A FULL STACK DEVLOPER
          </p>
          <div className='text-3xl text-gray-200 m-4'>
            <span>I KNOW </span>
          </div>
          <button className='bg-orange-200 min-w-200px p-3 m-8 rounded-md text-black font-medium hover:animate-pulse '>MY WORKS</button>
        </div>
      </div>
    </div>
  );
};