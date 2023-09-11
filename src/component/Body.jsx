import React from 'react';
import { Typed } from 'react-typed';

export const Body = () => {
  return (
    <div className='text-gray-200 bg-black'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen flex justify-center text-center mx-auto flex-col'>
        <p className='text-2xl tracking-widest'>Getting Started With Me</p>
        <h1 className='text-5xl text-blue-500 font-bold'>SLANGERES</h1>
        <div>
          <p className='md:text-2xl text-xl pl-2 text-gray-500'>
              HI THERE I AM ANDROID WEB DEVLOPER AND I HAVE SOME PROBLEM SOLVING ABILITY
          </p>
          <button className='bg-orange-200 min-w-200px p-3 m-3 rounded-md text-black font-medium '>MY WORKS</button>
        </div>
      </div>
    </div>
  );
};