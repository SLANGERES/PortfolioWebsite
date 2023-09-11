import React from 'react'
import AndroidLogo from './assets/AndroidLogo.png'
import ReactLogo from './assets/ReactLogo.png'
import watch from './assets/watch.png'

export const Card = () => {
  return (
    <div className='w-full bg-white py-[10rem]'>
        <div className='w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

            {/* first card */}

            <div className='w-full shadow-xl rounded-lg text-center hover:scale-105 duration-300'>
                <img classname='w-20 mt-l-3rem  mx-auto bg-white' src={AndroidLogo} alt="alt" />
                <h1 className='font-bold my-2 '>ANDROID APP DEVLOPMENT</h1>
                <p className='font-extrabold text-xl '>$899</p>
                <div className='text-center font-thin'>
                    <p className='py-2 border-b mx-10'>8 Hour Daily </p>
                    <p className='py-2 border-b mx-10'>UI UI Includes</p>
                    <p className='py-2 border-b mx-10'>Deployment and Hosting</p>
                    <p className='py-2 border-b mx-10'><span className='m-2'>KOTLIN</span><span className='m-2'>LAYOUT</span><span className='m-2'>GRADLE</span><span className='m-2'>FIREBASE</span></p>
                </div>
                <div className='bg-orange-200 min-w-200px px-6 py-2 my-6 mx-4 rounded-md text-black font-medium '>
                    <button>Hire</button>
                </div>
            </div>

            {/* Second card */}

            <div className='w-full shadow-xl rounded-lg text-center hover:scale-105 duration-300'>
                <img classname='w-20 mt-l-3rem  mx-auto bg-white' src={watch} alt="alt" />
                <h1 className='font-bold my-2 '>WERE OS DEVLOPMENT</h1>
                <p className='font-extrabold text-xl '>$599</p>
                <div className='text-center font-thin'>
                    <p className='py-2 border-b mx-10'>5 Hour Daily </p>
                    <p className='py-2 border-b mx-10'>UI UI Includes</p>
                    <p className='py-2 border-b mx-10'>Deployment and Hosting</p>
                    <p className='py-2 border-b mx-10'><span className='m-2'>KOTLIN</span><span className='m-2'>LAYOUT</span><span className='m-2'>GRADLE</span><span className='m-2'>FIREBASE</span></p>
                </div>
                <div className='bg-orange-200 min-w-200px px-6 py-2 my-6 mx-4 rounded-md text-black font-medium '>
                    <button>Hire</button>
                </div>
            </div>

            {/* third card */}

            <div className='w-full shadow-xl rounded-lg text-center hover:scale-105 duration-300'>
                <img classname='w-20 mt-l-3rem mx-auto bg-white h-[245px]' src={ReactLogo} alt="alt" />
                <h1 className='font-bold my-2 '>WEBSITE DEVLOPMENT</h1>
                <p className='font-extrabold text-xl '>$499</p>
                <div className='text-center font-thin'>
                    <p className='py-2 border-b mx-10' >8 Hour Daily </p>
                    <p className='py-2 border-b mx-10' >UI UI Includes</p>
                    <p className='py-2 border-b mx-10' >Deployment and Hosting</p>
                    <p className='py-2 border-b mx-10' ><span className='m-2'>REACT</span><span className='m-2'>JAVASCRIPT</span><span className='m-2'>CSS</span><span className='m-2'>HTML</span></p>
                </div>
                <div className='bg-orange-200 min-w-200px px-6 py-2 my-6 mx-4 rounded-md text-black font-medium '>
                    <button>Hire</button>
                </div>
            </div>
        </div>
    </div>
  )
}
