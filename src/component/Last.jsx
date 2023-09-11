import React from 'react'
import facebook from './assets/logo/facebook.png'
import instagram from './assets/logo/instagram.png'
import linkedin from './assets/logo/linkedin.png'
import youtube from './assets/logo/youtube.png'
import twitter from './assets/logo/twitter.png'
import karan from './assets/logo/karan.png'




export const Last = () => {
  return (
    <div className='bg-black w-full   '>
      <div className='w-[1240px] mx-auto grid justify-center pt-[5rem] px-[1rem]'>
        <div className='flex justify-center mb-10'>
          <img className='h-8 w-8 mx-2' src={instagram} alt="" />
          <img className='h-8 w-8 mx-2' src={facebook} alt="" />
          <img className='h-8 w-8 mx-2' src={linkedin} alt="" />
          <img className='h-8 w-8 mx-2' src={youtube} alt="" />
          <img className='h-8 w-8 mx-2' src={twitter} alt="" />
        </div>
        <div className='text-white font-thin mb-10'>
          <span className='mx-9 hover:scale-105 duration-300'>About</span>
          <span className='mx-9 hover:scale-105 duration-300'>Need Help?</span>
          <span className='mx-9 hover:scale-105 duration-300'>Tech Stack</span>
          <span className='mx-9 hover:scale-105 duration-300'>Store</span>
          <span className='mx-9 hover:scale-105 duration-300'>Privacy</span>
          <span className='mx-9 hover'>Collabration</span>
        </div>
        <div className='font-thin text-white mx-9 flex  '> 
          <span><img src={karan} className='h-12 w-12' alt="" />
            </span><span className='text-sm mt-6'>© 2014-2023 Mockplus Technology Co., Ltd. All rights reserved.</span>
          
        </div>

      </div>
    </div>
  )
}
