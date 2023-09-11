import React from 'react'
import {CiMenuBurger,CiMenuFries} from 'react-icons/ci'
import {BiMenu,BiMenuAltRight} from 'react-icons/bi'

import { useState } from 'react'

export const Header = () => {
  const[nav,setfun]=useState(false);
  const handleNav =()=>{
    setfun(!nav)
  }
  return (
    <div className=' flex text-white h-24 justify-between items-center max-w-[1240px] mx-auto px-4'>
      <h1 className=' text-3xl font-bold text-[#00df9a]   '>DEVLOPER </h1>
        <ul className='hidden md:flex'>
          <li className='p-5'>Home</li>
          <li className='p-5'>About</li>
          <li className='p-5'>Product</li>
          <li className='p-5'>Resources</li>
          <li className='p-5 rounded-lg'>Contact </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <BiMenuAltRight size={25}/> :<BiMenu size={25} />}
          
        </div>
        <div
        className={`fixed left-0 top-0 w-[30%] h-full ${
          nav
            ? 'opacity-100 ease-in-out duration-1000 transform translate-x-0'
            : 'opacity-0 ease-in-out duration-1000 transform -translate-x-full'
        }`}
      >
          <h1 className=' text-3xl font-bold text-[#00df9a] m-8  '>React </h1>
          <ul className='p-4 uppercase'>
            <li className='p-6 border-b border-b-gray-700'>Home</li>
            <li className='p-6 border-b border-b-gray-700'>About</li>
            <li className='p-6 border-b border-b-gray-700'>Product</li>
            <li className='p-6 border-b border-b-gray-700'>Resources</li>
            <li className='p-6 border-b border-b-gray-700'>Contact </li>
            </ul>
        </div>
    </div>
  )
}
