import React from 'react'

export const Contact = () => {
  return (
    <div className='w-full py-16 bg-black '>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2'>
            <div className='lg-col-span-2 mx-3'>
                <h1 className='text-white md:text-3xl text-xl font-semibold py-2 '>WANT TO HIRE ME ?</h1>
                <p className=' md:text-2xl text-l text-gray-700 uppercase '>Sign up for stay connected with me.</p>
            </div>
            <div className='my-3'>
                <div>
                    <input className='p-3 flex rounded-lg w-full' type="email" placeholder='Enter your email' />
                    <button className='bg-orange-200 min-w-200px px-6 py-2 my-6 mx-4 rounded-md text-black font-medium '>Notify Me</button>
                </div>
                <p className=' text-yellow-100 uppercase text-sm'>Your Email is fully protected Don't woriee</p>
            </div>

        </div>
    </div>
  )
}
