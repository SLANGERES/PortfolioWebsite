import React from 'react'
import tech from './assets/tech.png'

export const Footer = () => {
  return (
    <div className='bg-white w-full py-16 px-4'>
      <div className='mix-w-[1240px] mx-auto grid md:grid-cols-2 '>
          <img className='mx-auto w-[500px] h-[500px] my-4' src={tech} alt="PHOTO" />
          <div className='flex flex-col justify-center'>
            <p className='text-gray-500 font-semibold md:text-xl text-l'>I AM A FULL STACK DEVLOPER</p>
            <h1 className='text-blue-600 font-bold md:text-3xl text-2xl py-2 '>REACT.JS KOTLIN TAILWIND CSS C++</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis consequuntur, culpa iure, impedit eius atque maiores quos accusamus amet rerum repellat vero quod quas dolore. Vel praesentium inventore exercitationem quae debitis doloremque repellat accusamus.</p>

          </div>
          

      </div>
    </div>
    
  )
}
